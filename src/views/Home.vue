<template>
  <v-row no-gutters>
    <homes />
    <home-map />
  </v-row>
</template>

<script>
import Homes from "../components/Homes";
import HomeMap from "../components/HomeMap";

export default {
  components: {
    Homes,
    HomeMap
  },
};
</script>
