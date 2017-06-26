<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello v-if="currentView == 'component-a'"></hello>
    <br>
    <button @click="currentView = 'component-a'">Show component</button>
    <button @click="currentView = 'close'">Close component</button>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
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
