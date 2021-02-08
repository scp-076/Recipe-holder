require('./bootstrap');

window.Vue = require('vue').default;

Vue.component('Auth', require('./components/auth/Auth.vue').default);

import router from './router';
import store from './store';
import VideoBackground from 'vue-responsive-video-background-player'

Vue.component('video-background', VideoBackground);

const app = new Vue({
    el: '#app',
    router,
    store,
});
