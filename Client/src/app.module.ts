import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { ConfigModule } from '@nestjs/config';
// import { ClientsModule, Transport } from '@nestjs/microservices';
// import { env } from 'process';

@Module({
  imports: [
    // ConfigModule.forRoot(),
  //   ClientsModule.register([
  //   {
  //     name: 'GET_MQTT',
  //     transport: Transport.MQTT,
  //     options: {
  //       url: `${env.MQTT_URL}`,
  //     },
  //   },
  // ]),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
