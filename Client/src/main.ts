import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { env } from 'process';
import * as mqtt from 'mqtt';
import { AppService } from './app.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.useGlobalPipes(new ValidationPipe());

    const client = mqtt.connect("mqtt://test.mosquitto.org:1883");
    const event = app.get(AppService);

    client.on('connect', () => {
      console.log('Connected to MQTT broker');
      client.subscribe('MQTT', (err) => {
        if (err) {
          console.error('Error subscribing to "Product updated" topic', err);
        }
      });
    });

    client.on('message', (topic, message) => {
      console.log('Received message', topic, message.toString());
      const data = JSON.parse(message.toString());
      console.log('Received MQTT event:', data);
      event.emit(data);
    });

  app.setGlobalPrefix('api');
  app.enableCors();
  await app.listen(3001);
}
bootstrap();
