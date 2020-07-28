import { expect } from 'chai';
import Vue from 'vue';
const cocoui = require('../../../src/index');


describe('Full Calendar', () => {
    it('Vue', () => {
        // constructor (Ctor is convention of naming constructor)
        const Ctor = Vue.extend({ template: `<FullCalendar />` });
        const vm = new Ctor().$mount();
 });
});
