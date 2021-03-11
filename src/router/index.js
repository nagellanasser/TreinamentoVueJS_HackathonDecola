import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'
import ClubesLista from '../views/ClubesLista.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Início',
    component: Inicio
  },

  {
    path: '/classificacao',
    name: 'ClubesLista',
    component: ClubesLista
  },
  
]

const router = new VueRouter({
  routes
})

export default router
