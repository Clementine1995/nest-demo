// 可以在函数中或在具有 @Injectable() 装饰器的类中实现自定义 Nest中间件。
// 这个类应该实现 NestMiddleware 接口, 而函数没有任何特殊的要求。

import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    // console.log('Request...');
    next();
  }
}
