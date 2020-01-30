const arr: (number | string)[] = [1, '2', 3];
const stringArr: string[] = ['a', 'b', 'c'];
const undefinedArr: undefined[] = [undefined, undefined];

// type alias
type User = { name: string; age: number };

const objectArr: User[] = [
  {
    name: 'dell',
    age: 28
  }
];

class Teacher {
  name: string;
  age: number;
}

const teacherObjectArr: Teacher[] = [
  new Teacher(),
  // 这里并不一定非要用 new Teacher（）， 直接传对象也可以
  {
    name: 'dell',
    age: 28
  }
];

// Tuple (元组)：
// Array:
const teacherInfoArr: (number | string)[] = [18, 'Dell', 'male'];
// Tuple: (数量个数有限且每一项数据类型固定的数组)
// 元组可以按顺序（数组做不到）规定数组中每一项的类型
const teaderInfoTuple: [string, string, number] = ['Dell', 'male', 18];
// 在转化 CSV 文件时候, 定义类型：
const teacherList: [string, string, number][] = [
  ['dell', 'male', 19],
  ['sun', 'female', 26],
  ['jeny', 'female', 38]
];
