import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // 创建一个 Nest 应用实例，使用 NestFactory 核心类。
  // create() 方法返回一个实现 INestApplication 接口的对象, 并提供一组可用的方法
  const app = await NestFactory.create(AppModule);
  await app.listen(3002);
}
bootstrap();
