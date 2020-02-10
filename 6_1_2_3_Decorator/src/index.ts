// 普通方法， target 对应的是类的 prototype
// 静态方法： target 对应的是类的构造函数

// 类似于 Object.defineProperty() 方法
function getNameDecorator(
  target: any,
  key: string,
  descriptor: PropertyDescriptor
) {
  // console.log(target, key); // Test3 { getName: [Function] } 'getName'
  // descriptor.writable = false; // 这样 getName 这个方法就不能够被修改

  // 提前修改 getName 这个方法
  descriptor.value = function() {
    return 'decrorator';
  };
}

class Test3 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  @getNameDecorator
  getName() {
    return this.name;
  }
}

const test3 = new Test3('dell');
// test3.getName = () => {
//   return '123';
// };
console.log(test3.getName());
