import Vue from 'vue'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
// import ThongTinHocSinh from './components/ThongTinHocSinh.vue'
// import HelloWorld from './components/HelloWorld.vue'


// Vue.component('thong-tin-hoc-sinh', ThongTinHocSinh)
// Vue.component('HelloWorld', HelloWorld)

// new Vue({
//     router,
//     render: h => h(App)
// }).$mount("#app");

export const EvenBus = new Vue();

createApp(App).use(store).use(router).mount('#app')
