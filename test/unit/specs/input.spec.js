import { expect } from 'chai';
import Vue from 'vue';
import { mount } from '../../../test/util';

const cocoui =  require('../../../src/index');


Object.keys(cocoui).forEach(s => {
    Vue.component(s, cocoui[s]);
})


describe('Input', () => {
    it('Vue', () => {
        const vm = mount({ template: '<Input />' });
        expect(vm.$el.value).contain('Full Calendar');
    });
});
