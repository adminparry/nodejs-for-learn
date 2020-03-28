import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GlobalFilterFilter } from './global-filter.filter';
import { HttpExceptionFilter } from './common/filters/CommonNotFoundException';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalFilters(new GlobalFilterFilter(), new HttpExceptionFilter());
  await app.listen(3000);
}
bootstrap();
