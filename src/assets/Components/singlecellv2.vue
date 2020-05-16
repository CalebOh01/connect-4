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
    //Have to refactor the checks to work with both players differently
    checkVertWin() {
      //refactor this
      if (
        this.value.y <= 2 &&
        this.$board[this.value.x][this.value.y] ==
          this.$board[this.value.x][this.value.y + 1] &&
        this.$board[this.value.x][this.value.y] ==
          this.$board[this.value.x][this.value.y + 2] &&
        this.$board[this.value.x][this.value.y] ==
          this.$board[this.value.x][this.value.y + 3]
      ) {
        this.$emit('update-screen')
        console.log("win");
      }
    },
    checkHorWin() {
      let streak = 0;
      let streak_value = "yellow";
      for (let i = 0; i < 7; i++) {
        if (this.$board[i][this.value.y] == this.streak_value) {
          this.streak++;
          if (this.streak == 4) {
            console.log("win");
            this.$emit('update-screen')
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
    checkDiagWin() {
      let streak = 0;
      let streak_value = "yellow";
      for (let i = 0; i < 11; i++) {
        if (
          this.value.y - 5 + i < 0 ||
          this.value.x - 5 + i < 0 ||
          this.value.y - 5 + i > 5 ||
          this.value.x - 5 + i > 6
        ) {
          return;
        } else if (
          this.$board[this.value.x - 5 + i][this.value.y - 5 + i] ==
          this.streak_value
        ) {
          this.streak++;
          if (this.streak == 4) {
            console.log("win");
            this.$emit('update-screen')
            break;
          } else {
            this.streak = 1;
            if (this.$board[this.value.x - 5 + i][this.value.y - 5 + i] != "") {
              this.streak_value = this.$board[this.value.x - 5 + i][
                this.value.y - 5 + i
              ];
            }
          }
        }
      }
      for (let i = 0; i < 11; i++) {
        if (
          this.value.x + 5 - i > 6 ||
          this.value.x + 5 - i < 0 ||
          this.value.y - 5 + i < 0 ||
          this.value.y - 5 + i > 5
        ) {
          return;
        } else if (
          this.$board[this.value.x + 5 - i][this.value.y - 5 + i] ==
          this.streak_value
        ) {
          this.streak++;
          if (this.streak == 4) {
            console.log("win");
            this.$emit('update-screen')
            break;
          }
        } else {
          this.streak = 1;
          if (this.$board[this.value.x + 5 - i][this.value.y - 5 + i] != "") {
            this.streak_value = this.$board[this.value.x + 5 - i][
              this.value.y - 5 + i
            ];
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
        this.redActive = true;
        this.yellowActive = false;
        this.$player1turn.value = !this.$player1turn.value;
        console.log("red");
        this.$board[this.value.x][this.value.y] = "red";
        this.checkVertWin();
        this.checkHorWin();
        this.checkDiagWin();
      } else if (
        this.$player1turn.value == false &&
        this.$board[this.value.x][this.value.y] == "" &&
        this.$board[this.value.x][this.value.y + 1] != ""
      ) {
        this.yellowActive = true;
        this.redActive = false;
        this.$player1turn.value = !this.$player1turn.value;
        console.log("yellow");
        this.$board[this.value.x][this.value.y] = "yellow";
        this.checkVertWin();
        this.checkHorWin();
        this.checkDiagWin();
      } else if (
        this.$player1turn == true &&
        this.value.y == 5 &&
        this.$board[this.value.x][this.value.y] == ""
      ) {
        this.redActive = true;
        this.yellowActive = false;
        this.$player1turn.value = !this.$player1turn.value;
        console.log("red");
        this.$board[this.value.x][this.value.y] = "red";
        this.checkVertWin();
        this.checkHorWin();
        this.checkDiagWin();
      } else if (
        this.$player1turn == false &&
        this.value.y == 5 &&
        this.$board[this.value.x][this.value.y] == ""
      ) {
        this.redActive = true;
        this.yellowActive = false;
        this.$player1turn.value = !this.$player1turn.value;
        console.log("red");
        this.$board[this.value.x][this.value.y] = "yellow";
        this.checkVertWin();
        this.checkHorWin();
        this.checkDiagWin();
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