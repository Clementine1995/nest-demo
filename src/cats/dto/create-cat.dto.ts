// DTO是一个对象，它定义了如何通过网络发送数据。我们可以通过使用 TypeScript接口或简单的类来完成。
// 在这里推荐使用类。因为类编译之后仍然会存在

export class CreateCatDto {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}
