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
    <div v-if="this.homeScreenOn">
      <div class="contain">
        <h1>
          <span>Two Player</span> Connect Four
        </h1>
        <button @click="startGame()">Play the Game</button>
      </div>
    </div>
    <div v-if="!this.homeScreenOn">
      <div v-if="!this.status" class="row">
        <h1>Connect 4</h1>
      </div>
      <comp-board v-if="!this.status" @change-screen="updateScreen()"></comp-board>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: false,
      homeScreenOn: true
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
    },
    startGame() {
      this.homeScreenOn = false;
    }
  }
};
</script>

<style>
.contain {
  padding-top: 350px;
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

.row h1 {
  padding: 20px;
  text-align: center;
  display: inline-block;
}
</style>