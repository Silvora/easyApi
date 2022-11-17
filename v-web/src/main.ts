import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import './global';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(55667);
}
bootstrap();
