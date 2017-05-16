<template>
  <div id="search">
    <b-form-input v-model="text" type="text" placeholder="Search House"></b-form-input>
    </br>
    <b-button href="">
          Search
    </b-button>
    <b-button href="/#/add-house">
          Sell Your House Now
    </b-button>
    </br>
    </br>
    <MainContent></MainContent>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import MainContent from './MainContent'


export default{
  data() {
    return {
      text: ''
    }
  },
  methods: {

  },
  components:{
    MainContent
  }
}

</script>

<style scoped>

</style>
