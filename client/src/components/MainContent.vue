<template>
  <div>
    <b-card v-for="house in houses" :header="house.title"
           class="mb-2"
           :img="house.photo"
           :sub-title="house.price"
           show-footer
   >
       <small slot="footer" class="text-muted">
          <b-button variant="primary" @click="editHouse(house)">
            Edit
          </b-button>
          <b-button variant="danger" @click="deleteHouse(house)">
             Delete
          </b-button>
       </small>
   </b-card>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import axios from 'axios'

export default{
  data() {
    return {
      text: ''
    }
  },
  computed: mapState([
    'houses'
  ]),
  methods: {
    deleteHouse(house){
      this.$store.dispatch('DELETE_HOUSE', { deleteHouse : house })
      .then(response=>{
        this.$router.push('/')
      })
    },
    editHouse(house){
      console.log(house._id);
      this.$router.push({
        name:'update-house',
        params: { id: house._id}
      })
    }
  }
}
</script>

<style  scoped>

</style>
