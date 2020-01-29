// 如果此时函数不写返回值，则 TS 不会报错，因为它已经判断将返回字符串

function add(first: number, second: number) {
  return first + second + '';
}

const total = add(1, 2);

// 如果加上了函数返回值，则 TS 就会报错，所以应该写上函数返回值

function add1(first: number, second: number): number {
  return first + second + '';
}

const total1 = add1(1, 2);

// void 返回值: 返回空
function sayHello(): void {
  console.log('hello');
}

// never 返回值： 永远不可能执行到最后

function errorEmitter(): never {
  throw new Error(); // 或者 while(true){}
  // console.log(111) 这里永远执行不到
}

// 解构赋值的返回值定义：
function add2({ first, second }: { first: number; second: number }): number {
  return first + second;
}
const total2 = add2({ first: 1, second: 2 });

function getNumber({ first }: { first: number }) {
  return first;
}
const count1 = getNumber({ first: 1 });
