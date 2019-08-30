import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    homes: [
      {
        title: "lorem",
        address: "test",
        coordinates: {
          lat: 47.82924,
          lng: 35.13486
        },
        prices: {
          day: 50,
          week: 500,
          monthly: 99999,
        },
        image: require ("./assets/house.jpg"),
        rating: 5
      },
      {
        title: "lorem 2",
        address: "test 2",
        coordinates: {
          lat: 47.83025,
          lng: 35.15586
        },
        prices: {
          day: 50,
          week: null,
          monthly: 5000,
        },
        image: require ("./assets/house2.jpg"),
        rating: 1
      },
      {
        title: "lorem 3",
        address: "test 3",
        coordinates: {
          lat: 47.83125,
          lng: 35.16686
        },
        image: require ("./assets/house3.jpg"),
        rating: 3
      }
    ],
    chosen_home: null
  },
  mutations: {
    chose_home( state, data ){
      state.chosen_home = {...data};
    }
  },
  actions: {
    chose_home( { state, commit }, data ){
      commit("chose_home", data);
    }
  },
  getters: {
    homes(state) {
      return state.homes;
    },
    chosen_home(state) {
      return state.chosen_home
    }
  }
})
