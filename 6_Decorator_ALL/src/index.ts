import 'reflect-metadata';

// const user = {
//   name: 'dell'
// };

// reflect-metadata 可以在类上储存一些数据
// defineMetadata 有三个参数， Key: data, value: test, target obj: user
// Reflect.defineMetadata('data', 'test', user);
// console.log(Reflect.getMetadata('data', user)); // test

// 定义在类上
// @Reflect.metadata('data', 'test')
// class User {
//   name = 'dell';
// }

// 定义在属性上
// class User {
//   @Reflect.metadata('data', 'test')
//   name = 'dell';
// }

// console.log(Reflect.getMetadata('data', User.prototype, 'name')); // test

// 定义在方法上

class User {
  @Reflect.metadata('data', 'test')
  @Reflect.metadata('data1', 'test')
  getName() {}
}

class Teacher extends User {}

console.log(Reflect.getMetadata('data', User.prototype, 'getName')); // test
console.log(Reflect.hasMetadata('data', User.prototype, 'getName')); // true
console.log(Reflect.hasMetadata('data', Teacher.prototype, 'getName')); // true
console.log(Reflect.hasOwnMetadata('data', Teacher.prototype, 'getName')); // false
console.log(Reflect.getMetadataKeys(User.prototype, 'getName'));
// [ 'design:returntype',
//   'design:paramtypes',
//   'design:type',
//   'data1',
//   'data' ]
console.log(Reflect.getMetadataKeys(Teacher.prototype, 'getName'));
// [ 'design:returntype',
//   'design:paramtypes',
//   'design:type',
//   'data1',
//   'data' ]
// [ 'design:returntype',
//   'design:paramtypes',
//   'design:type',
//   'data1',
//   'data' ]
console.log(Reflect.getOwnMetadataKeys(Teacher.prototype, 'getName')); // []
