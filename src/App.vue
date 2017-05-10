<template>
  <div id="app">
    <transition :name="transitionName">
        <router-view class="child-view"></router-view>
    </transition>
 
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      transitionName:'slide-left'
    }
  },
  watch: {
  '$route' (to, from) {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      }
    }
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
}
</style>
