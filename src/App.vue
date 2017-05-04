<template>
  <div id="app">

    <transition
         name="custom-classes-transition"
         enter-active-class="animated fadeInRight"
         leave-active-class="animated fadeOutLeft"
       >
        <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import "./assets/css/common.css";
@import "~animate.css/animate.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
