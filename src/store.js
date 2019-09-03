import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    homes: [
      {
        id: 1,
        title: "квартира",
        address: "просп. Соборный, 139А",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores, aut consequatur culpa debitis dicta eaque esse illo itaque libero nesciunt obcaecati officia, praesentium quasi quibusdam repellat saepe. Id, modi.",
        coordinates: {
          lat: 47.839225,
          lng: 35.13718
        },
        prices: {
          day: 50,
          week: 500,
          monthly: 99999,
        },
        image: require ("./assets/house.jpg"),
        images: {
          1: require ("./assets/house.jpg"),
          2: require ("./assets/house2.jpg"),
          3: require ("./assets/house3.jpg"),
        },
        rating: 5,
        options: {
          wifi: true,
          kitchen: true,
          laundry: true,
          heating: true,
          parking: true,
          smoking: true,
          dryer: true,
          furnished: true
        }
      },
      {
        id: 2,
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
        rating: 1,
        options: {
          wifi: true,
          kitchen: false,
          laundry: true,
          heating: false,
          parking: true,
          smoking: false,
          dryer: true,
          furnished: true
        }
      },
      {
        id: 3,
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
        rating: 3,
        options: {
          wifi: true,
          kitchen: false,
          laundry: false,
          heating: false,
          parking: true,
          smoking: true,
          dryer: false,
          furnished: true
        }
      }
    ],
    chosen_home: null,
    items: [
      {
        text: 'Wi-Fi',
        icon: 'mdi-wifi',
        option: 'wifi'
      },
      {
        text: 'Kitchen',
        icon: 'mdi-food-fork-drink',
        option: 'kitchen'
      },
      {
        text: 'Laundry',
        icon: 'mdi-washing-machine',
        option: 'laundry'
      },
      {
        text: 'Heating',
        icon: 'mdi-home-thermometer',
        option: 'heating'
      },
      {
        text: 'Parking',
        icon: 'mdi-parking',
        option: 'parking'
      },
      {
        text: 'Smoking',
        icon: 'mdi-smoking',
        option: 'smoking'
      },
      {
        text: 'Dryer',
        icon: 'mdi-tumble-dryer',
        option: 'dryer'
      },
      {
        text: 'Fully Furnished',
        icon: 'mdi-bed-king',
        option: 'furnished'
      },
    ],
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
    homes: state => {
      return state.homes;
    },
    home: state => id => {
      id = parseInt(id);
      return state.homes.find(home => home.id === id);
    },
    chosen_home: state => {
      return state.chosen_home
    },
    items: state => {
      return state.items
    }
  }
})
