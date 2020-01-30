// private, protected, public, access modifier
// public 允许我在类的内外被调用
// private 允许在类内被使用
// protected 允许在类内及继承的子类中使用

class Person {
  public name: string;
  // private name: string;
  // protected name: string;
  public sayHi() {
    this.name;
    console.log('hi');
  }
}

class Teacher extends Person {
  public sayBye() {
    this.name;
  }
}

const person = new Person();
person.name = 'dell';
console.log(person.name);
person.sayHi();

// constructor： new 一个实例时，这一瞬间，会被执行
class Person1 {
  // 传统写法：
  // public name: string;
  // constructor(name: string) {
  //   this.name = name; 可省
  // }

  // 简化写法：
  constructor(public name: string) {}
}
const person1 = new Person1('dell');
console.log(person.name);

class Person2 {
  constructor(public name: string) {}
}

// 当子类继承父类，并且有子类自己的构造器时，子类必须在其构造器中用super()去调用父类构造函数
// 如果父类没有构造器，子类也必须调用空的父类构造函数
class Teacher2 extends Person2 {
  constructor(public age: number) {
    super('dell-for-parent'); // 必须调用父类的构造函数
    // super(); // 如果父类没有构造器，子类也必须调用空的父类构造函数
  }
}

// 初始化逻辑：
// 当实例化子类，该实例先开始有了自己的属性（age)， 然后因为子类继承了父类，所以子类也必须执行
// 父类的构造函数以继承获得父类的属性 (name)

const teacher2 = new Teacher2(28);
console.log(teacher2.age); // 28
console.log(teacher2.name); // dell-for-parent
