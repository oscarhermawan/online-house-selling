<template>
  <div>
    EDIT </br>
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

    <b-button @click="updateHouse">
          UPDATE
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
      location:'',
      params:''
    }
  },
  methods:{
    updateHouse(){
      let idUrl = this.params
      let updateHouse={
        params:this.params,
        title:this.title,
        description:this.description,
        photo:this.photo,
        price:this.price,
        address:this.address,
        location:this.location
      }
      this.$store.dispatch('UPDATE_HOUSE', { updateHouse })
      .then(response=>{
        this.$router.push('/')
      })
    }
  },
  created(){
    let self = this
    this.params = this.$router.currentRoute.params.id
    axios.get(`http://localhost:3000/houses/${this.params}`)
    .then((house)=>{
      self.title=house.data.title,
      self.description=house.data.description,
      self.photo=house.data.photo,
      self.price=house.data.price,
      self.address=house.data.address,
      self.location=house.data.location
    })
  }

}
</script>

<style>
</style>
