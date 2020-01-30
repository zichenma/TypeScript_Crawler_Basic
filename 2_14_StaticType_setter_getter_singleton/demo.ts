// getter and setter:

class Person {
  constructor(private _name: string) {}
  // 可以理解为对 name 的加密， 能确保安全性
  get name() {
    // 私有变量用 _
    return this._name + ' lee';
  }
  set name(name: string) {
    const realName = name.split(' ')[0]; // dell
    this._name = realName;
  }
}

const person = new Person('dell'); // 实例化时无 Lee
// 如果是私有属性，则无法直接用 person.name 获得， 但可以用Getter获得
console.log(person.name); // dell lee
person.name = 'dell lee';
console.log(person.name);

// singleton:
// 目标： 永远只能生成类的一个实例
// 所以必须要限制住外部通过 new 来创建新的实例
class Demo {
  // 4. 在 Demo 类上再创建一个 instance 私有属性,
  private static instance: Demo;
  // 1. 则可以吧 constructor 变成私有变量
  private constructor(public name: string) {}

  // 2. 如果把 constructor 私有那怎么来创建实例呢？答案是通过一个 static 的方法
  // static 是指把方法挂在类上面，而不是挂在实例上面
  static getInstance() {
    if (!this.instance) {
      // 4. 来存储 new Demo();
      this.instance = new Demo('dell lee singleton');
    }
    return this.instance;
    // 3. 但是此时每次调用仍然是一个新的实例
    // return new Demo();
  }
}

// 此时 demo1 和 demo2 就相等了
const demo1 = Demo.getInstance();
const demo2 = Demo.getInstance();
console.log(demo1.name); // dell lee singleton
console.log(demo2.name); // dell lee singleton

// 流程：
// 1. 实例化 demo1 时候，首先判断有没有 this.instance (此时 this.instance 还是 null 或者 undefined)
// 那就创建一个 demo 实例 放在 instance 上， 然后返回该 instance。所以 demo1 是创建新的 demo 实例
// 2. 实例化 demo1 时候，当判断有没有 this.instance 时候，因为 instance 已经在 1 中挂载到了类上，则
// 直接返回了 instance

// practice:
class mySingleton {
  private static instance: mySingleton;

  private constructor() {}

  static getInstance() {
    if (!this.instance) {
      this.instance = new mySingleton();
    }
    return this.instance;
  }
}

const singleton1 = mySingleton.getInstance();
const singleton2 = mySingleton.getInstance();

console.log(singleton1 === singleton2); // true
