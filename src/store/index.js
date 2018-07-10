import Vue from 'vue'
import Vuex from 'vuex'
import routers from '@/router/routers'
import Utils from '@/libs/utils'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    breadcrumbList: []
  },
  getters: {
    menuList: (state) => {
      return Utils.getMenuList(routers)
    }
  },
  mutations: {
    setBreadcrumbList: (state, routeMetched) => {
      state.breadcrumbList = Utils.getBreadcrumbList(routeMetched)
    }
  },
  actions: {}
})