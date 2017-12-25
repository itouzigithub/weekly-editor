import Vue from 'vue'
import App from './App.vue'
import { Dialog, Button, Input, Message } from 'element-ui'
Vue.use(Dialog)
Vue.use(Button)
Vue.use(Input)
Vue.prototype.$message = Message

new Vue({
  el: '#app',
  render: h => h(App)
})
