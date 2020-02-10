function visitDecorator(
  target: any,
  key: string,
  descriptor: PropertyDescriptor
) {
  descriptor.writable = false;
}

class Test4 {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }
  // 对于 visitor 的 decorator 只能用在 set 或者 get 上
  // 不能同时都用
  get name() {
    return this._name;
  }
  @visitDecorator
  set name(name: string) {
    this._name = name;
  }
}

const test4 = new Test4('dell');
test4.name = 'dell lee';
console.log(test4.name);
