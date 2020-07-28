import Vue from 'vue';
import App from './app.vue';

Vue.config.debug = true;

const app = new Vue({
    render: h => h(App)
}).$mount('#app');
