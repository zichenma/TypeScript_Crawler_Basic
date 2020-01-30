// interface 和 type 相类似，但并不完全一致
// type 可以直接代表基础类型，interface 则不可以，只可以代表函数，对象：
// 一般优先用 interface
type Person1 = string;

interface Person {
  name: string;
  // readonly name: string; // 禁止赋值
  age?: number; //可有可无
  [propName: string]: any; // 还可以有其他的属性，属性名字类型为字符串，类型可以是任意
  say(): string; // 一个返回值类型为字符串的方法
}

// 接口的继承
interface Teacher extends Person {
  teach(): string;
}

const getPersonName = (person: Person) => {
  console.log(person.name);
};
// 如果规定类型，则如果 person的某个属性是个 undefined 则不会报错，直到编译的时候
const setPersonName = (person: Teacher, name: string) => {
  person.name = name;
};

const person = {
  name: 'dell',
  age: 18,
  sex: 'male',
  say() {
    return 'say hello';
  },
  teach() {
    return 'teach';
  }
};

// 如果直接传对象，则 TS 会进行强校验， 则会报错 （除非在接口中加上 [propName: string]: any;）
// 多了一个属性： SEX）：

// getPersonName({
//   name: 'dell',
//   age: 18,
//   sex: 'male'
// });

// 把对象存在一个变量里， 则不会触发强校验：
getPersonName(person);

setPersonName(person, 'lee');

class User implements Person {
  name = 'dell';
  say() {
    return 'hello';
  }
}

// 接口定义函数类型：
// 函数的类型叫 SayHi， 函数必须接受一个 String 类型参数，并且必须返回String
interface SayHi {
  (word: string): string;
}

const say: SayHi = (word: string) => {
  return word;
};

// init 一个 TS 项目： tsc --init
// 转化 TS 成 JS： tsc demo.ts
// 查看转化后的 deomo.js 文件 发现接口并没有被转化成 JS 代码，
// 所以接口在 TS 中只是一个语法提示的工具
