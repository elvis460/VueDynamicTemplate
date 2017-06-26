<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello v-if="currentView == 'component-hello'"></hello>
    <hi v-if="currentView == 'component-hi'"></hi> 
    <br>
    <button @click="currentView = 'component-hello'">Component Hello</button>
    <button @click="currentView = 'component-hi'">Component Hi</button>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Hi from './components/Hi'

export default {
  name: 'app',
  components: {
    Hello,
    Hi
  },
  data () {
    return {
      currentView: 'aa',
    }
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
  margin-top: 60px;
}
</style>
