// readonly：

class Person {
  // readonly 能限制住 public 属性，让其只能读不能改
  public readonly name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const person = new Person('Dell');
// person.name = 'hello'; 不行，因为 name 是 readonly
console.log(person.name);

// Abstract Class:

abstract class Geom {
  width: number;
  // 意味着该方法具体实现也是抽象的, 所以只能定义：
  abstract getArea(): number;
  getType() {
    return 'Gemo';
  }
}

// new Geom() 不可以，因为是抽象类

class Circle extends Geom {
  // 必须实现抽象类中的抽象方法：
  getArea() {
    return 123;
  }
}

class Square {}

class Triangle {}

// Interface:

interface Person1 {
  name: string;
}

interface Teacher extends Person1 {
  teachingAge: number;
}

interface Student extends Person1 {
  age: number;
}

const teacher = {
  name: 'dell',
  teachingAge: 3
};

const student = {
  name: 'lee',
  age: 18
};

const getUserInfo = (user: Person1) => {
  console.log(user.name);
};

getUserInfo(teacher);
getUserInfo(student);
