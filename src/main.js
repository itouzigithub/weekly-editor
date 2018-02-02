import Vue from 'vue'
import App from './App.vue'
import router from './router.js'

import { Dialog, Button, Input, Message } from 'element-ui'
Vue.use(Dialog)
Vue.use(Button)
Vue.use(Input)
Vue.prototype.$message = Message

const version = 1.0;

var oldVersion = localStorage.version;
if (!oldVersion || oldVersion !== version.toString()) {
	localStorage.version = version;
	localStorage.WEEKLY_HTML = null;
	localStorage.TOUTIAO_HTML = null;
}

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})