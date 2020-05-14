<template>
  <div id="app">
    <h1 v-show="this.$winState.state">WINNER</h1>
    <comp-board v-show="!this.$winState.state"></comp-board>
  </div>
</template>


