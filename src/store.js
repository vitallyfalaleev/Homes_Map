import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    homes: [
      {
        title: "квартира",
        address: "просп. Соборный, 139А",
        coordinates: {
          lat: 47.839372,
          lng: 35.135646
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
          lat: 50.83125,
          lng: 60.16686
        },
        prices: {
          day: 50,
          week: 500,
          monthly: 99999,
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
