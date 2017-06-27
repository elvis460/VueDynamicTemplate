<template>
  <div id="app">
    <img src="./assets/logo.png">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <div class="controls">
      <router-link :to="{ name: 'hello', params: { id: parseInt($route.params.id)}}">
        Hello {{$route.params.id}}
      </router-link> 
      <br>
      <router-link :to="{ name: 'hi', params: { id: parseInt($route.params.id) }}">
        Hi {{$route.params.id}}
      </router-link>
    </div>
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
      currentView: 'hello',
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
