import { expect } from 'chai';
import Vue from 'vue';
const cocoui =  require('../../../src/index');

Vue.use(cocoui);

describe('Input', () => {
    it('Vue', () => {
        // constructor (Ctor is convention of naming constructor)
        const Ctor = Vue.extend({ template: `<Input />` });
        const vm = new Ctor().$mount();
        expect(vm.$el.value).contain('')
 });
});
