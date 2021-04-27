<template>
  <SimonGame title="Simon game" />
</template>

<script>
import SimonGame from "./components/SimonGame.vue";

export default {
  name: "App",
  components: {
    SimonGame,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: black;
  color: white;
}
</style>
