<template>
  <div class="hello">
      <img src="../../assets/logo.png"><br>
      <ul>  
      <li><router-link to="/par" replace>par</router-link></li>
        <li><router-link to="/par/foo" replace>/par/foo</router-link></li>
        <li><router-link to="/par/bar" replace>/par/bar</router-link></li>
      </ul>
      <transition name='fade' mode='out-in'>
      <router-view ></router-view>
      </transition>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
