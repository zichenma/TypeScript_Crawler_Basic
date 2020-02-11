import 'reflect-metadata';

// 接收到的函数是 constructor 可以用 typeof User 表示：
function showData(target: typeof User) {
  // key 为 User 类上的所有方法
  for (let key in target.prototype) {
    const data = Reflect.getMetadata('data', target.prototype, key);
    console.log(data);
    // name
    // age
  }
}

// 执行顺序：
// 1. 方法上的装饰器
// 2. 类上的装饰器
// 这样类上的装饰器才能找到，原型上的所有方法

// @showData
// class User {
//   @Reflect.metadata('data', 'test')
//   getName() {}
//   @Reflect.metadata('data', 'age')
//   getAge() {}
// }

// 自己封装的好处就是可以 customize
function setData(dataKey: string, msg: string) {
  return function(target: User, key: string) {
    // 在类上封装一个 key 为 data, 值为 age 的数据
    // dataKey => data, msg => age, target => User的原型, key => getAge
    Reflect.defineMetadata(dataKey, msg, target, key);
  };
}

@showData
class User {
  @Reflect.metadata('data', 'name')
  getName() {}
  // same:
  @setData('data', 'age')
  getAge() {}
}
