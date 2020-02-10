// // 如果在 Decorator 里面创建一个 descriptor， 则这个 descriptor
// // 会替换掉老的 descriptor。 此例中，原来 name 属性的 descriptor
// // 被 decorator 中的 descriptor 所替代，因此不能被改写
// function nameDecorator(target: any, key: string): any {
//   //descriptor.writable = false;
//   const descriptor: PropertyDescriptor = {
//     writable: false
//   };
//   // console.log(target, key); Test5 {} 'name'
//   return descriptor;
// }

// 修改的并不是实例上的 name， 而是原型上的 name
function nameDecorator(target: any, key: string): any {
  target[key] = 'lee'; //这是原型上的属性
}

// name 放在实例上
class Test5 {
  @nameDecorator
  name = 'Dell'; // 这是实例上的属性
}

// const test5 = new Test5();
// test5.name = 'dell lee';
// console.log(test5.name);

const test5 = new Test5();
console.log((test5 as any).__proto__.name); // lee
