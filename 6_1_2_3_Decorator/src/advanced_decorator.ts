// Method 1:
function testDecorator1<T extends new (...args: any[]) => any>(constructor: T) {
  return class extends constructor {
    name = 'lee';
    getName() {
      return this.name;
    }
  };
}

// 解释：
// (...args: any[]) => any 是一个函数，返回值是一个 any
// 这个函数接收很多参数，参数的每一项都是 any
// new 指的是构造函数
// 构造函数能接收很多参数，每一个参数都是一个 any 类型，最后返回 any 类型

@testDecorator1
class Test1 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const test1 = new Test1('dell');

// 直接调用此方法，则会报错，因为 getName 并不是类直接
// 提供的方法, 而是由装饰器提供
// console.log(test.getName());

console.log((test1 as any).getName());

// Method 2:
function testDecorator2() {
  // 返回一个装饰器：
  return function<T extends new (...args: any[]) => any>(constructor: T) {
    return class extends constructor {
      name = 'lee';
      getName() {
        return this.name;
      }
    };
  };
}
// Test2 是装饰器装饰过后的类，所以可以直接调用 getName
const Test2 = testDecorator2()(
  class {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }
);

const test2 = new Test2('dell');
console.log(test2.getName());
