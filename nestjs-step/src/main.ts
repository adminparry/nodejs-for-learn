import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { step } from './constants/count';
// let step: number = 0;
async function bootstrap() {
  // tslint:disable-next-line:no-console
  console.log(step.count++, '初始化调用bootstrap');
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
