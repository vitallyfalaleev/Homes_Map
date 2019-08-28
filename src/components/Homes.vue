<template>
  <v-col cols="sm-4 md-6">
    <v-list>
      <v-subheader>Homes</v-subheader>
      <v-list-item-group color="primary">
        <home-item v-for="home in homes" :key="home.title" :home="home" />
      </v-list-item-group>
    </v-list>
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