// 控制器应处理 HTTP 请求并将更复杂的任务委托给 providers。
// Providers 是纯粹的 JavaScript 类，在其类声明之前带有 @Injectable()装饰器。

import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}

// 要指示provider是可选的，需要 constructor 的参数中使用 @optional() 装饰器。

// @Injectable()
// export class HttpService<T> {
//   constructor(
//     @Optional() @Inject('HTTP_OPTIONS') private readonly httpClient: T
//   ) {}
// }

// 如果顶级类依赖于一个或多个 providers，那么通过从构造函数中调用子类中的 super() 来传递属性就会非常烦人了。
// 因此，为了避免出现这种情况，可以在属性上使用 @inject() 装饰器。

// @Injectable()
// export class HttpService<T> {
//   @Inject('HTTP_OPTIONS')
//   private readonly httpClient: T;
// }
