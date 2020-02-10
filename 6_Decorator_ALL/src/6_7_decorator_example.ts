const userInfo: any = undefined;
// 如果用 try...catch 则会很长
// class Test7 {
//   getName() {
//     try {
//       return userInfo.name;
//     } catch (e) {
//       console.log("userInfo.name doesn't exit");
//     }
//   }
//   getAge() {
//     try {
//       return userInfo.age;
//     } catch (e) {
//       console.log("userInfo.age doesn't exit");
//     }
//   }
// }

// 捕获异常可以通过装饰器实现代码复用
function catchError(msg: string) {
  return function(target: any, key: string, descriptor: PropertyDescriptor) {
    const fn = descriptor.value;
    descriptor.value = function() {
      try {
        fn();
      } catch (e) {
        console.log(msg);
      }
    };
  };
}

class Test7 {
  @catchError("userInfo.name doesn't exist")
  getName() {
    return userInfo.name;
  }
  @catchError("userInfo.age doesn't exist")
  getAge() {
    return userInfo.age;
  }
}

const test7 = new Test7();
test7.getName();
test7.getAge();
