<template>
    <div class="container">
      <div v-for="(a,i) in 7" :key="i">
        <div v-for="(a,j) in 6" :key="j">
          <comp-cell :value="{
            x: i,
            y: j
          }"
          @update-screen="updateScreen"
          ></comp-cell>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  methods: {
    updateScreen() {
     this.$emit('change-screen') 
    }
  }
}
</script>

<style>
.container {
  background-color: rgb(73, 106, 216);
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>