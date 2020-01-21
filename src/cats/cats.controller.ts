import { Controller, Get, Req, Post, HttpCode, Header, Param, Body, Res, HttpStatus } from '@nestjs/common'
import { CreateCatDto } from './dto/create-cat.dto'
import { Request, Response } from 'express'
import { CatsService } from './cats.service'
import { Cat } from './interfaces/cat.interface'

// cats就是该控制器的前缀
@Controller('cats')
export class CatsController {

  // CatsService 是通过类构造函数注入的。
  // 这意味着我们已经在同一位置创建并初始化了 catsService 成员。
  constructor(private readonly catsService: CatsService) {}

  // @Get中不传参数，默认就是/cats
  @Get()
  // 要将响应重定向到特定的 URL，可以使用 @Redirect()装饰器或者使用类库调用res.redirect()
  // @Redirect() 带有必需的 url参数和可选的 statusCode参数。 如果省略，则 statusCode 默认为 302。
  // 有时您可能想动态确定HTTP状态代码或重定向URL。通过从路由处理程序方法返回对象
  // {
  //   "url": string,
  //   "statusCode": number
  // }
  // 返回的值将覆盖传递给 @Redirect()装饰器的所有参数
  // @Redirect('https://nestjs.com', 301)
  findAll(@Req() request: Request): string {
    // 访问客户端的请求细节。强制 Nest 使用 @Req() 装饰器将请求对象注入处理程序，同时还有@Body() 或 @Query()等
    // console.log(request)

    // 不引入response之前
    // 使用这个内置方法，当请求处理程序返回一个 JavaScript 对象或数组时，它将自动序列化为 JSON。
    // 响应的状态码默认情况下始终为 200，但使用 201 的 POST请求除外。可以通过在处理程序级别添加 @HttpCode(...) 装饰器
    return 'This action returns all cats'

    // 可以在函数签名通过 @Res() 注入类库特定的 响应对象（例如，Express），从而具有使用该对象的响应处理函数
    // 注意！ 禁止同时使用这两种方法。
    // response.status(200).send()
  }
  // Nest以相同的方式提供其余的端点装饰器- @Put() 、 @Delete()、 @Patch()、 @Options()、 @Head()和 @All()
  @Post()
  // 通常，状态码不是固定的，而是取决于各种因素。在这种情况下，可以使用类库特有的的响应
  @HttpCode(204)
  // 要指定自定义响应头，可以使用 @header() 修饰器或类库特有的响应对象或者使用类库 调用res.header()
  @Header('Cache-Control', 'none')
  create(): string {
    return 'This action adds a new cat';
  }

  @Get('/test/11')
  findTest(@Res() res: Response) {
    res.status(HttpStatus.OK).json([])
  }

  // 路由同样支持模式匹配。
  @Get('ab*cd')
  findAbcd() {
    return 'This route uses a wildcard'
  }

  // 每个异步函数都必须返回 Promise。这意味着可以返回延迟值, 而 Nest 将自行解析它。
  // 也可以使用Rxjs
  @Get('all')
  async findAllCats(): Promise<Cat[]> {
    return this.catsService.findAll()
  }

  @Get(':id')
  // 为了定义带参数的路由，我们可以在路由中添加路由参数标记，以捕获请求 URL 中该位置的动态值。
  findOne(@Param() params): string {
  // findOne(@Param('id') id): string { 两种方式
    // console.log(params.id);
    return `This action returns a #${params.id} cat`
  }

  // 之前的 POST 路由处理程序不接受任何客户端参数。添加 @Body() 参数来解决这个问题。

  @Post()
  async create1(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }
}
