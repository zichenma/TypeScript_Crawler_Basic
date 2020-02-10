// 类的装饰器
// 装饰器本身是一个函数
// 类装饰器接收的参数，是构造函数
// 装饰器通过 @ 符号来使用

// 挂载方法的装饰器：
// function testDecorator(constructor: any) {
//   constructor.prototype.getName = () => {
//     console.log('dell');
//   };
//   // console.log('decorator');
// }

// 用工厂模式创建的有条件的装饰器：
function testDecorator(flag: true) {
  if (flag) {
    return function(constructor: any) {
      constructor.prototype.getName = () => {
        console.log('dell');
      };
    };
  } else {
    return function(constructor: any) {};
  }
}

// 基本装饰器：
// function testDecorator1(constructor: any) {
//   console.log('decorator1');
// }

@testDecorator(true)
// @testDecorator
// @testDecorator1
class Test {}
const test = new Test();
(test as any).getName();
