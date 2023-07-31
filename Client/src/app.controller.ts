import { Controller, Sse } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Sse('events')
  doTheSse() {
    return this.appService.subscribe();
  }

}
