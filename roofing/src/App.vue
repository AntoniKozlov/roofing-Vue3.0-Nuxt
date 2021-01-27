<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <MainApp msg="Welcome to Your Vue.js"/>
  </div>
</template>

<script>
import MainApp from './components/main-app/MainApp.vue'

export default {
  name: 'App',
  components: {
    MainApp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
