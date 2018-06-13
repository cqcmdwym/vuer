<template>
  <div id="app">
    <demo-header></demo-header>
    <router-view/>
  </div>
</template>

<script>
import DemoHeader from './components/Header.vue'

export default {
  name: 'App',
  components: {
    DemoHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  border: 1px dotted;
  margin: 20px;
}
</style>
