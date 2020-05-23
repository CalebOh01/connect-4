<template>
  <div id="app">
    <div v-if="this.status" @change-screen="updateScreen()">
      <div class="contain">
        <h1>
          The winner is
          <span>{{ this.$whoseTheWinner.value }}</span>
        </h1>
        <button @click="resetGame()">Play Again</button>
      </div>
    </div>
    <comp-board v-if="!this.status" @change-screen="updateScreen()"></comp-board>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: false
    };
  },
  methods: {
    updateScreen() {
      this.status = !this.status;
    },
    resetGame() {
      for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 6; j++) {
          this.$board[i][j] = "";
        }
      }
      this.status = !this.status;
      console.log(this.$board);
    }
  }
};
</script>

<style>
.contain {
  padding-top: 300px;
  text-align: center;
  font-family: "Roboto", sans-serif;
}

h1 {
  font-weight: bold;
}

button {
  border: none;
  background-color: cornflowerblue;
  border-radius: 20px;
  padding: 10px 20px;
  margin: 10px;
  color: white;
}

.container {
  text-align: center;
}
span {
  font-style: italic;
}
</style>