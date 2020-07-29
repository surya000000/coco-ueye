import Vue from 'vue';
// export default class VueWrapper extends Wrapper implements BaseWrapper {
//   constructor(vm: Component, options: WrapperOptions) {
//       super(vm._vnode, options, true)
//   }
// }
const mount = (component, data) => {
    return component;
    // return VueWrapper(component, options);
};

export default mount;
