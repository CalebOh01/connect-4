import Vue from 'vue'
import App from './App.vue'
import compcell from './assets/Components/singlecellv2.vue'

Vue.prototype.$player1turn = {value: true}
Vue.prototype.$board = [
   ['','','','','',''],
   ['','','','','',''],
   ['','','','','',''],
   ['','','','','',''],
   ['','','','','',''],
   ['','','','','',''],
   ['','','','','','']
]

Vue.component('comp-cell', compcell)

new Vue({
  el: '#app',
  render: h => h(App)
})
