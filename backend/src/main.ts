import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';
import { isNumberObject } from 'util/types';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { DevInterceptor } from './dev.interceptor';

async function bootstrap() {
  const port = process.env.HOST_PORT;
  if (!isNumberObject(new Number(port))) {
    throw 'Port number in Env file is not correct!';
  }

  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new DevInterceptor());

  const config = new DocumentBuilder().setTitle('doc').build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);

  console.log(`Listening at port: ${port}`);
}
bootstrap();
