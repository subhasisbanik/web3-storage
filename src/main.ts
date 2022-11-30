import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {abortOnError: false});
  console.log("Hello world");
  const configService = app.get(ConfigService);
  await app.listen(await configService.get('port'));
  
}
bootstrap();
