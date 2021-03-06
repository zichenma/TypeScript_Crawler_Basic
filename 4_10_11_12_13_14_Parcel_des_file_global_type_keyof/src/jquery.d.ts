// 定义全局变量：
// 用 declare 来定义全局变量， var 来定义变量
// $ 是一个函数，返回空
// param 是一个函数，返回一个对象
// declare var $: (param: () => void）=> void;

// 定义全局函数：

// interface JqueryInstance {
//   html: (html: string) => JqueryInstance;
// }
// 函数重载：一个函数可以定义多种形式 ：$ 可以传入函数，也可以传入字符串
// declare function $(readyFunc: () => void): void;

// 外面的 $ 已经定义了是一个函数，所以不会报错。
// $(function() {
// 但是里面的 $ 传的是一个字符串，所以会报错
//   $('body').html('<div>123<div>');
// });

// declare function $(params: string) : {
//   html: (html: string) => {};
// };

// 优化：
// declare function $(selector: string) : JqueryInstance;

// 优化重载：
// 使用 interface 的语法实现函数重载
// interface JQuery {
//   (readyFunc: () => void): void;
//   (selector: string): JqueryInstance;
// }

// declare var $: JQuery;

// 申明对象：
// declare namespace $ {
//   namespace fn {
//     class init {}
//   }
// }

// ES6 模块化类型描述：

declare module 'jquery' {
  interface JqueryInstance {
    html: (html: string) => JqueryInstance;
  }
  // 混合类型：
  function $(readyFunc: () => void): void;
  function $(selector: string): JqueryInstance;
  namespace $ {
    namespace fn {
      class init {}
    }
  }
  export = $;
}
