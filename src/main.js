// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Hello from './components/Hello'
import Hi from './components/Hi'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
    routes: [{
        path: '/',
        redirect: '/hi'
    }, {
        name: 'hello',
        path: '/hello/:id',
        component: Hello
    }, {
        name: 'hi',
        path: '/hi',
        component: Hi
    }]
});

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: h => h(App)
  // template: '<App/>',
  // components: { App },
})