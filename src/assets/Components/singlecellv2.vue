<template>
  <div class="cell" :class="{redcell: redActive, yellowcell: yellowActive}" @click="myPlay(i,j)"></div>
</template>

<script>
export default {
    data(){
        return {
            redActive: false,
            yellowActive: false
        }
    },
    props: {
        value: String
    },
    methods: {
    myPlay(x,y) {
      if (this.$player1turn.value == true) {
        this.redActive = true;
        this.yellowActive = false
        this.$player1turn.value = !this.$player1turn.value
        console.log("red");
      } else {
        this.yellowActive = true;
        this.redActive = false
        this.$player1turn.value = !this.$player1turn.value
        console.log("yellow");
      }
    }
    }
}
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