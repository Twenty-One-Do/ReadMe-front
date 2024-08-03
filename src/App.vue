<template>
  <div id="app">
    <SiteNavBar />
    <router-view></router-view>
    <SiteFooter />
  </div>
</template>

<script>
import SiteNavBar from './components/common/Header.vue'
import SiteFooter from './components/common/Footer.vue'

export default {
  name: 'App',
  components: {
    SiteNavBar,
    SiteFooter
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
