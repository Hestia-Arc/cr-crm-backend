import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
// import { ConsoleLogger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(
    AppModule,
    //   {
    //   logger: new ConsoleLogger({
    //     json: true,
    //   }),
    // }
  );

  const config = new DocumentBuilder()
    .setTitle('CR-CYCLE CRM')
    .setDescription('AI-powered Real Estate CRM')
    .setVersion('1.0')
    .addTag('CRM')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);
  // app.setGlobalPrefix('api/v1');
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
