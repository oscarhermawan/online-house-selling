import Vue from 'vue'
import Router from 'vue-router'
import Utama from '@/components/Utama'
import UpdateHouse from '@/components/UpdateHouse'
import AddHouse from '@/components/AddHouse'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Utama
    },
    {
      path:'/add-house',
      name: 'addhouse',
      component:AddHouse
    },
    {
      path:'/edit-house/:id',
      name: 'update-house',
      component:UpdateHouse
    }
  ]
})
