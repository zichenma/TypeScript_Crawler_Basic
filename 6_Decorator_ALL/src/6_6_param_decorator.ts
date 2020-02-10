// 原型， 方法名， 参数所在的位置
function paramDecorator(target: any, key: string, paramIndex: number) {
  console.log(target, key, paramIndex); // Test6 { getInfo: [Function] } 'getInfo' 0
}

class Test6 {
  getInfo(@paramDecorator name: string, age: number) {
    console.log(name, age);
  }
}

const test6 = new Test6();
test6.getInfo('dell', 30);
