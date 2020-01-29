// type annotaion 类型注解，我们来告诉 TS 变量是什么类型
// type inference 类型推断, TS 会自动尝试分析变量的类型
// 如果 TS 能够自动分析变量类型，我们就什么也不需要做了
// 如果 TS 无法分析变量类型，我们就需要类型注解

let countAnnotation: number;
countAnnotation = 123;

let countInference = 123;

// 在次情况下，TS 能判断类型，则不需要加类型注解
const firstNumber = 1;
const secondNumber = 2;
const numTotal = firstNumber + secondNumber;

const obj = {
  name: 'dell',
  age: 18
};

// 在次情况下，TS 不能判断类型，则需要加类型注解
function getNumTotal(firstNumber: number, secondNumber: number) {
  return firstNumber + secondNumber;
}

const total = getNumTotal(1, 2);
