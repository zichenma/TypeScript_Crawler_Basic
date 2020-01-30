// 基础类型， boolean, number, string, void, undefined, symbol, null

// 如果放在两行则没办法推断出类型, 需要手动标明类型
let countNum: number;
countNum = 123;

// 对象类型, {}, Class, function, []

// 定义方法的两种方式：
// 方式一：
const func = (str: string) => {
  // const func = (str: string): number => {
  // 函数的返回类型并不需要写，因为 TS 会判断 parseInt 会返回 number
  return parseInt(str, 10);
};

// 方式二：
// 记忆方法：冒号后面是返回类型，等号后面是函数体
// 必须写返回类型，否则语法不正确
const func1: (str: string) => number = str => {
  return parseInt(str, 10);
};

// 总结：
// 一般参数需要注明数据类型，返回值则可以根据类型推断而定
//

const date = new Date();

// 其他的 case
interface Person {
  name: string;
}
const rawData = '{"name" : "dell"}';
// TS 没有办法根据内置函数进行类型推断：
const newData = JSON.parse(rawData);
// 所以必须申明类型
const newData1: Person = JSON.parse(rawData);

// 如果非得把 number 转化成 string， 则可以用以下方式：
let temp: number | string = 123;
temp = '456';
