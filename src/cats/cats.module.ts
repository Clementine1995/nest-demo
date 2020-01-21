import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

// @Global()
// @Global 装饰器使模块成为全局作用域。 全局模块应该只注册一次，最好由根或核心模块注册。
// 使一切全局化并不是一个好的解决方案。 全局模块可用于减少必要模板文件的数量。
@Module({
  controllers: [CatsController],
  providers: [CatsService],
  // 假设我们将在几个模块之间共享 CatsService 实例。 我们需要把 CatsService 放到 exports 数组中
  // 现在，每个导入 CatsModule 的模块都可以访问 CatsService ，并且它们将共享相同的 CatsService 实例。
  exports: [CatsService],
  // 模块可以导出他们的内部提供者。 而且，他们可以再导出自己导入的模块。
  // imports: [CommonModule],
})
export class CatsModule {}

// 提供者也可以注入到模块(类)中（例如，用于配置目的）
// export class CatsModule {
//   constructor(private readonly catsService: CatsService) {}
// }

// 动态模块
// https://docs.nestjs.com/modules#dynamic-modules
