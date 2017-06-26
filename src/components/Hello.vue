<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <ul>
        <li v-for="user in users">
          {{user.firstname}} - {{user.lastname}}
        </li>
      </ul>
    </div>
    <div class="">
    <input type="text" v-model="input_val">
    <p>Input value : {{input_val}}</p>
  </div>
  <div class="btn">
    <button v-on:click="counter++">Clciked {{counter}} times!!!</button>
  </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      users: [
        {firstname: 'Villager', lastname: 'Hsu'},
        {firstname: 'Villager1', lastname: 'Hsu'},
        {firstname: 'Villager2', lastname: 'Hsu'}
      ],
      input_val: '',
      counter: 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
