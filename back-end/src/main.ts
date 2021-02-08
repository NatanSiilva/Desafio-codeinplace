import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import * as dotenv from 'dotenv'


dotenv.config();


async function bootstrap() {
  console.log(process.env.TYPEORM_TYPE)
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(process.env.API_PORT || 3333);
}
bootstrap();
