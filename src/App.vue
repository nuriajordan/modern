<template>
  <div id="app">
    <nav></nav>
    <div v-if="!loading">
      <router-view />
    </div>
    <div v-else>
      <div class="espera">Un moment</div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    loading() {
      return this.$store.state.loading;
    },
  },
  beforeCreate() {
    this.$store.dispatch("fetchAllData");
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

body {
  background-color: white;
  margin: 0;
}
</style>
