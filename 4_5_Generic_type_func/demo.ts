// 如果 first, second 需要同时保证一致的 type (string, string) 或者
// (number, number) 则需要用到泛型
// 泛型就是 泛指的类型

// function join(first: string | number, second: string | number) {
//   return `${first}${second}`;
// }

// 定义一种类型， ABC 使得 first, second 都是这样的类型
function join<ABC>(first: ABC, second: ABC) {
  return `${first}${second}`;
}

// 在使用函数的时候，定义 ABC 为 string， 则能保证两个参数都必须为 string
join<string>('1', '2');
// join<number>(1,2);

function map<ABC>(params: ABC[]) {
  // same:
  // function map<ABC>(params: Array<ABC>) {
  return params;
}

map<string>(['123']);

function join1<T, P>(first: T, second: P) {
  return `${first}${second}`;
}

join1<number, string>(1, '1');
// join(1, '1') //   如果不写类型，TypeScript 也会进行类型推断

// 有返回类型：
function join2<T>(first: T): T {
  return first;
}
