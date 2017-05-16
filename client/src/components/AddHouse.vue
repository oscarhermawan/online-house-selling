<template>
  <div>
    SELL YOUR HOUSE, FOR YOUR DREAM, MAKE IT BETTER </br>
    <b-form-input v-model="title" type="text" placeholder="Enter your title"></b-form-input>
    <br>
    <b-form-input v-model="description" type="text" placeholder="Enter your description"></b-form-input>
    <br>
    <b-form-input v-model="photo" placeholder="Input Your Photo "></b-form-input>

    <br>
    <b-form-input v-model="price" placeholder="Input Your Price"></b-form-input>
    <br>

    <b-form-input v-model="address" placeholder="Input Your Address"></b-form-input>
    <br>

    <b-form-input v-model="location" placeholder="Input Your Location"></b-form-input>
    <br>

    <b-button @click="addHouse">
          SELL NOW, FOR BETTER FUTURE
    </b-button>

  </div>
</template>

<script>
import axios from 'axios'
export default{
  data(){
    return{
      title:'',
      description:'',
      photo:'',
      price:'',
      address:'',
      location:''
    }
  },
  methods:{
    addHouse(){
      let newHouse={
        title:this.title,
        description:this.description,
        photo:this.photo,
        price:this.price,
        address:this.address,
        location:this.location
      }
      this.$store.dispatch('ADD_HOUSE', { newHouse })
      .then(response=>{
        this.$router.push('/')
      })
    }
  }
}
</script>

<style>
</style>
