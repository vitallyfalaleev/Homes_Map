<template>
  <v-col cols="sm-4 md-6">
    <v-sheet
        class="overflow-y-auto"
        max-height="94vh">
    <Filters />
    <v-list>
      <v-list-item-group >
        <home-item v-for="home in homes" :key="home.title" :home="home" />
      </v-list-item-group>
    </v-list>
    </v-sheet>
  </v-col>
</template>

<script>
  import HomeItem from "./HomeItem";
  import Filters from "./Filter";
  export default {
    name: 'Homes',
    components: {HomeItem, Filters},
    comments: {
      HomeItem
    },
    data(){
      return {

      }
    },
    computed: {
      homes(){
        return this.$store.getters.homes
      }
    }
  };
</script>

<style>

</style>