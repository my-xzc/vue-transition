<template>
  <div class="hello">
      <img src="../assets/logo.png"><br>
    <router-link to="/hello">hello</router-link>
    <router-link to="/par">par</router-link>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    getDate:function(){
      this.$http.jsonp('http://api.douban.com/v2/movie/top250')
          .then(function(res){
              console.log(res);
          },function(res){
              console.log(res);
          })
    }
  },
  created () {
      this.getDate();  
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
