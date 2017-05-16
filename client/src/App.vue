<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {

  name: 'app',
  components:{

  },
  mounted: function(){
    this.$store.dispatch('LOAD_HOUSE_LIST')
  }
}
</script>

<style>
#app {
  width:70%;
  margin:0 auto;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
