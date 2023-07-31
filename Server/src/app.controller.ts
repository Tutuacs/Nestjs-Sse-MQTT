import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    @Inject('MQTT_MACHINE') private readonly client: ClientProxy,
    ) {}

  @Get()
  sendMQTT() {
    this.client.emit('MQTT', {data: "Hello from MQTT"});
    console.log("Send")
    // return this.appService.sendMQTT();
  }
}
