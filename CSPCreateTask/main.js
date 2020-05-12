// var MyAppConstants = (function() {
//   var pvt = {
//     player1turn: true,
//   }
//   return({
//   get: function(name) {
//     return(pvt[name]);
//   }
// }
Vue.component('comp-cell', {
  template: '<div class="cell" :class="{redcell: redActive, yellowcell: yellowActive}" @click="myPlay"></div>',
  data(){
    return{
      yellowActive: false,
      redActive: false,
      $player1turn: true
    }
  },
  methods: {
    myPlay () {
      if (this.$player1turn == true) {
        this.redActive = true
        this.$player1turn = !this.$player1turn
        console.log('red')
      } else {
        this.yellowActive = true
        this.$player1turn = !this.$player1turn
        console.log('yellow')
      }
    }
  }
})

new Vue({
  el: '#app',
  data: {
    board: {
      row1: ['','','','','',''],
      row2: ['','','','','',''],
      row3: ['','','','','',''],
      row4: ['','','','','',''],
      row5: ['','','','','',''],
      row6: ['','','','','',''],
      row7: ['','','','','','']
    },
  }
})