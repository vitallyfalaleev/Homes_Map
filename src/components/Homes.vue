<template>
  <v-col cols="sm-4 md-6">
    <v-sheet
        class="overflow-y-auto"
        max-height="94vh">
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
  export default {
    name: 'Homes',
    components: {HomeItem},
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