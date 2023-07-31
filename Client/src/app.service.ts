import { Injectable } from '@nestjs/common';
import {EventEmitter} from "events";
import { fromEvent } from 'rxjs';

@Injectable()
export class AppService {
  
  public readonly emitter: EventEmitter;

  constructor(
      // Inject some Service here and everything about SSE will stop to work.
  ) {
      this.emitter = new EventEmitter();
  }

  subscribe() {
      return fromEvent(this.emitter, 'events');
  }

  async emit(data: any) {
      console.log("send Sse");
      return this.emitter.emit('events', {data});
  }
}
