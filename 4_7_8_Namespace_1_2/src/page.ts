// home namespace 下的 components 是依赖于 components namespace
///<reference path='./components.ts' />

namespace Home {
  // 暴露出去
  export namespace Dell {
    export const teacher: Components.user = {
      name: 'dell'
    };
  }
  export class Page {
    constructor() {
      new Components.Header();
      new Components.Content();
      new Components.Footer();
    }
  }
}
