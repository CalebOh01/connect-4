<template>
    <div class="container">
      <div v-for="(a,i) in 6" :key="i">
        <div v-for="(a,j) in 7" :key="j">
          <comp-cell :value="$board[i][j]"></comp-cell>
        </div>
      </div>
    </div>
</template>


<style>
.container {
  background-color: rgb(73, 106, 216);
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>