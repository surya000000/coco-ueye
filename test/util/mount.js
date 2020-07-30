import Vue from 'vue';

const mount = (component, data) => {
    return new Vue(component).$mount(null);
};

export default mount;
