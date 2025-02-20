import { NestFactory }  from '@nestjs/core';
import { AppModule }    from './app.module';

const port = process.env.PORT || 10000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //await app.listen(process.env.PORT ?? 3000);
  await app.listen(process.env.PORT ?? port);
}

bootstrap();
