<template>
  <div id="app">
    <h1 v-if="this.status" @update-screen="updateScreen">WINNER</h1>
    <comp-board v-if="!this.status" @update-screen="updateScreen"></comp-board>
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
      this.status = true
    }
  }
}
</script>