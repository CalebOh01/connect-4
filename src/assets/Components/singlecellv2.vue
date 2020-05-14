<template>
  <div class="cell" :class="{redcell: redActive, yellowcell: yellowActive}" @click="myPlay()"></div>
</template>

<script>
export default {
  data() {
    return {
      isClicked: false,
      redActive: false,
      yellowActive: false,
    };
  },
  props: {
    value: Object
  },
  methods: {
    myPlay() {
      if (this.$player1turn.value == true && this.isClicked == false && (this.$board[this.value.x][(this.value.y)+1] != '') || this.value.y == 5) {
        this.redActive = true;
        this.yellowActive = false;
        this.isClicked = true;
        this.$player1turn.value = !this.$player1turn.value;
        console.log("red");
        this.$board[this.value.x][this.value.y] = 'filled'
      } else if (this.$player1turn.value == false && this.isClicked == false && (this.$board[this.value.x][(this.value.y)+1] != '') || this.value.y == 5){
        this.yellowActive = true;
        this.redActive = false;
        this.isClicked = true;
        this.$player1turn.value = !this.$player1turn.value;
        console.log("yellow");
        this.$board[this.value.x][this.value.y] = 'filled'
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