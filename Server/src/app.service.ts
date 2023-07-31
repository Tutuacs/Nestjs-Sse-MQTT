import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {

  constructor(
    @Inject('MQTT_MACHINE') private readonly client: ClientProxy,
  ) {}

  sendMQTT() {
    this.client.emit('GET_MQTT', {data: "Hello from MQTT"});
    return console.log("Send")
  }
}
