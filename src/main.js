import Vue from 'vue'
import App from './App.vue'
import compcell from './assets/Components/singlecellv2.vue'
import gameboard from './assets/Components/connectfourboard.vue'

Vue.prototype.$player1turn = { value: true }
Vue.prototype.$whoseTheWinner = { value: 'red' }
Vue.prototype.$board = [
  ['', '', '', '', '', ''],
  ['', '', '', '', '', ''],
  ['', '', '', '', '', ''],
  ['', '', '', '', '', ''],
  ['', '', '', '', '', ''],
  ['', '', '', '', '', ''],
  ['', '', '', '', '', '']
]
Vue.component('comp-cell', compcell)
Vue.component('comp-board', gameboard)

new Vue({
  el: '#app',
  render: h => h(App)
})
