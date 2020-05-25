<template>
  <div class="cell" :class="{redcell: redActive, yellowcell: yellowActive}" @click="myPlay()"></div>
</template>

<script>
export default {
  data() {
    return {
      redActive: false,
      yellowActive: false
    };
  },
  props: {
    value: Object
  },
  methods: {
    checkWin() {
      this.checkVertWin();
      this.checkHorWin();
      this.checkDiagWin1();
      this.checkDiagWin2();
      this.draw();
    },
    myClick(value) {
      console.log(this.$board)
      if (value == "red") {
        this.redActive = true;
        this.yellowActive = false;
      } else {
        this.redActive = false;
        this.yellowActive = true;
      }
      this.$player1turn.value = !this.$player1turn.value;
      if (this.$player1turn.value == false) {
        this.$whoseTheWinner.value = "red";
      } else {
        this.$whoseTheWinner.value = "yellow";
      }
      console.log(value);
      this.$board[this.value.x][this.value.y] = value;
      this.checkWin();
    },
    checkVertWin() {
      if (
        this.value.y <= 2 &&
        this.$board[this.value.x][this.value.y] ==
          this.$board[this.value.x][this.value.y + 1] &&
        this.$board[this.value.x][this.value.y] ==
          this.$board[this.value.x][this.value.y + 2] &&
        this.$board[this.value.x][this.value.y] ==
          this.$board[this.value.x][this.value.y + 3]
      ) {
        this.$emit("update-screen");
        console.log("win vert");
      }
    },
    checkHorWin() {
      let streak = 0;
      let streak_value = "yellow";
      for (let i = 0; i < 7; i++) {
        if (this.$board[i][this.value.y] == this.streak_value) {
          this.streak++;
          if (this.streak == 4) {
            console.log("win hor");
            this.$emit("update-screen");
            break;
          }
        } else {
          this.streak = 1;
          if (this.$board[i][this.value.y] != "") {
            this.streak_value = this.$board[i][this.value.y];
          }
        }
      }
    },
    checkDiagWin1() {
      let streak = 0;
      let streak_value = "yellow";
      for (let i = 0; i < 12; i++) {
        if (
          this.value.x - 5 + i < 0 ||
          this.value.x - 5 + i > 6 ||
          this.value.y - 5 + i < 0 ||
          this.value.y - 5 + i > 5
        ) {
          this.streak = 1;
        } else if (this.$board[this.value.x - 5 + i][this.value.y - 5 + i] == this.streak_value) {
          this.streak++;
          if (this.streak == 5) {
            console.log("win diag1");
            this.$emit("update-screen");
          }
        } else {
          this.streak = 1;
          if (this.$board[this.value.x - 5 + i][this.value.y - 5 + i] != "") {
            this.streak_value = this.$board[this.value.x - 5 + i][this.value.y - 5 + i];
          }
        }
      }
    },
    checkDiagWin2() {
      let streak = 0;
      let streak_value = "yellow";
      for (let i = 0; i < 11; i++) {
        if (
          this.value.x + 5 - i < 0 ||
          this.value.x + 5 - i > 6 ||
          this.value.y - 5 + i < 0 ||
          this.value.y - 5 + i > 5
        ) {
          this.streak = 1;
        } else if (this.$board[this.value.x + 5 - i][this.value.y - 5 + i] == this.streak_value) {
          this.streak++;
          if (this.streak == 5) {
            console.log("win diag2");
            this.$emit("update-screen");
          }
        } else {
          this.streak = 1;
          if(this.$board[this.value.x + 5 - i][this.value.y - 5 + i] != "") {
            this.streak_value = this.$board[this.value.x + 5 - i][this.value.y - 5 + i];
          }
        }
      }
    },
    draw () {
      let draw_streak = 0
      for(let i = 0; i<this.$board.length; i++){
        for(let j = 0; j<this.$board[i].length; i++){
          if(this.$board[i][j] != ''){
            this.draw_streak++;
            if(this.draw_streak == 42){
              this.$whoseTheWinner.value = 'NO ONE';
            }
          } else{
            this.draw_streak = 0;
            break;
          } 
        }
      }
    },
    myPlay() {
      if (
        this.$player1turn.value == true &&
        this.$board[this.value.x][this.value.y] == "" &&
        this.$board[this.value.x][this.value.y + 1] != ""
      ) {
        this.myClick("red");
      } else if (
        this.$player1turn.value == false &&
        this.$board[this.value.x][this.value.y] == "" &&
        this.$board[this.value.x][this.value.y + 1] != ""
      ) {
        this.myClick("yellow");
      } else if (
        this.$player1turn == true &&
        this.value.y == 5 &&
        this.$board[this.value.x][this.value.y] == ""
      ) {
        this.myClick("red");
      } else if (
        this.$player1turn == false &&
        this.value.y == 5 &&
        this.$board[this.value.x][this.value.y] == ""
      ) {
        this.myClick("yellow");
      }
    }
  }
};
</script>

<style>
.cell {
  min-width: 70px;
  height: 70px;
  background-color: rgb(211, 200, 200);
  border-radius: 50%;
  display: inline-block;
  text-align: center;
  align-items: center;
  margin: 15px 15px;
}

.redcell {
  background-color: rgb(245, 62, 62);
}

.yellowcell {
  background-color: rgb(243, 243, 144);
}
</style>