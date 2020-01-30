class Person {
  name = 'dell'; // 定义类属性
  getName() {
    return this.name;
  }
}

const person = new Person();

// 类继承

class Teacher extends Person {
  getTeacherName() {
    return 'techer';
  }
}
// 多太：
class Teacher1 extends Person {
  getName() {
    // 重写之后依然可以用 super 去调用父类中的方法
    // return super.getName() + ' lee'; / dell lee
    return 'lee';
  }
  getParentName() {
    // super 可以指向父类中的方法
    return super.getName() + ' lee';
  }
}
// 运行 TS： ts-node demo.ts
const teacher = new Teacher();
console.log(teacher.getName()); // dell
console.log(teacher.getTeacherName()); // teacher
const teacher1 = new Teacher1();
console.log(teacher1.getName()); // lee
console.log(teacher1.getParentName()); // dell lee
