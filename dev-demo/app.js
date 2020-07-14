import Vue from 'vue';
import App from './app.vue';
// const cocoui = require('../src/index');

// Vue.use(cocoui);

Vue.config.debug = true;

const app = new Vue({
    render: h => h(App)
}).$mount('#app');
