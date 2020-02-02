//问题： 如果需要输入多种类型的参数，则联合类型不足以满足
class DataManager {
  constructor(private data: string[] | number[]) {}
  getItem(index: number): string | number {
    return this.data[index];
  }
}

const data = new DataManager(['1']);
data.getItem(0);

// 解决： 所以需要泛型
class DataManager1<T> {
  constructor(private data: T[]) {}
  getItem(index: number): T {
    return this.data[index];
  }
}

const data1 = new DataManager1<string>(['1']);
data1.getItem(0);

// 如果需要一个 name 属性在 data[index] 里，可以定义一个 interface：
interface Item {
  name: string;
}
// 泛型里面一定要有 Item 这个属性
class DataManager2<T extends Item> {
  constructor(private data: T[]) {}
  getItem(index: number): string {
    return this.data[index].name;
  }
}

const data2 = new DataManager2([{ name: 'dell' }]);

// 规定泛型只能是 number 或者 string：

class DataManager3<T extends number | string> {
  constructor(private data: T[]) {}
  getItem(index: number): T {
    return this.data[index];
  }
}

const data3 = new DataManager3<number>([1]);

// 如果使用泛型做类型注解：
// 函数必须接收一个泛型最终返回值是string

function hello<T>(params: T) {
  return params;
}
const func: <T>(params: T) => T = hello;
