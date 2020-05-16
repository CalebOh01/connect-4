<template>
  <div id="app">
    <div v-if="this.status" @change-screen="updateScreen()">
      <h1> The winner is {{ this.$whoseTheWinner.value }}</h1>
      <button @click="resetGame">Play Again</button>
    </div>
    <comp-board v-if="!this.status" @change-screen="updateScreen()"></comp-board>
  </div>
</template>

<script>
export default {
  data(){
    return{
      status: false
    }
  },
  methods: {
    updateScreen(){
      this.status = !this.status
    },
    resetGame(){
      this.$board = this.$board.forEach(function(column){
        column.forEach(function(cell){
          cell = '';
        })
      });
      this.status = !this.status
    }
  }
}
</script>