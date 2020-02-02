interface Bird {
  fly: boolean;
  sing: () => {};
}

interface Dog {
  fly: boolean;
  bark: () => {};
}

// 类型保护(Type Guard)实现方式：
// 1. 类型断言：
// 联合类型 （union type)
function trainAnimal(animal: Bird | Dog) {
  if (animal.fly) {
    // 此情况 TS 并不能判断出 animal type 一定是 Bird
    // animal.sing()
    // 所以需要断言的方式告诉 TS:
    (animal as Bird).sing();
  } else {
    (animal as Dog).bark();
  }
}

// 2. in 语法实现类型保护
function trainAnimal2(animal: Bird | Dog) {
  if ('sing' in animal) {
    animal.sing();
  } else {
    animal.bark();
  }
}

// 3. type of 实现类型保护：
function add(first: string | number, second: string | number) {
  if (typeof first === 'string' || typeof second === 'string') {
    return `${first}${second}`;
  }
  return first + second;
}

// 4. 用 instanceof 语法来做类型保护
// 此时必须用 class 来做类型定义，因为只有类才有 instanceof
class NumberObj {
  count: number;
}

function add2(first: object | NumberObj, second: object | NumberObj) {
  if (first instanceof NumberObj && second instanceof NumberObj) {
    return first.count + second.count;
  }
  return 0;
}
