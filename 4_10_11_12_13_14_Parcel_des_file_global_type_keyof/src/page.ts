// for 4.10
// const teacher: string = 'dell';
// console.log(teacher);
// import $ from 'jquery';

// for 4.11, 4.12, 4.13:
// $(function() {
// declare var $: (param: () => void）=> void;
// $('body').html('<div>123<div>');
// interface JqueryInstance {
//   html: (html: string) => JqueryInstance;
// }
// 如果对对象进行定义，以及对类进行类型定义，以及命名空间的潜规则
// new $.fn.init();
// declare namespace $ {
//   namespace fn {
//     class init {}
//   }
// }
// });

// for 4.14:
interface Person {
  name: string;
  age: number;
  gender: string;
}

// 类型可以是字符串：
// type NAME = 'name';
// const abc: NAME = 'name';
// 报错： 类型必须是 ‘name’
// const abce: NAME = 'name1';

class Teacher {
  constructor(private info: Person) {}
  // 方法2：范形
  // 原理：
  // keyof 代表遍历一个对象，当遍历到 name, (类似：T extends 'name') 时候，相当于

  // key: 'name';
  // Person['name'];

  // type T = 'age'
  // key: 'age'
  // Person['age']

  // type T = 'gender'
  // key: 'gender'
  // Person['gender']

  getInfo<T extends keyof Person>(key: T): Person[T] {
    // 如果此时传的参数不在 Person 里， 虽然能编译，但是会报错
    // return this.info[key];
    // 方法1:
    // if (key === 'name' || key === 'age' || key === 'gender') {
    //   return this.info[key];
    // }
    return this.info[key];
  }
}

const teacher = new Teacher({
  name: 'dell',
  age: 18,
  gender: 'male'
});

const test = teacher.getInfo('name');
console.log(test);
