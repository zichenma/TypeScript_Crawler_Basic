// 基础类型： number, string, null, undefined, symbol, boolean, void...
const count: number = 123;
const teachName: string = 'Dell';

// 对象类型 (Object Type)：

class Person {}

const teacher: {
  name: string;
  age: number;
} = {
  name: 'Dell',
  age: 18
};

const numbers: number[] = [1, 2, 3];

// dell 必须是一个 Person 类 对应的对象
const dell: Person = new Person();

// getTotal 是一个函数，这个函数返回值是 number
const getTotal: () => number = () => {
  return 123;
};
