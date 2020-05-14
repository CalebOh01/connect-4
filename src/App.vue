<template>
  <div id="app">
    <h1 v-if="this.$winState.value">WINNER</h1>
    <comp-board v-if="this.$winState.value == false"></comp-board>
  </div>
</template>


