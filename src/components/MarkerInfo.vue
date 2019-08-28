<template>
  <div>
    <v-card
        max-width="300"
        class="mx-auto"
    >
      <v-card-title>{{ marker.title }}</v-card-title>
      <v-card-text>{{ marker.address }}</v-card-text>
    </v-card>


  </div>
</template>
<script>
  export default {
    props: [ "marker" ],
    name: "MarkerInfo",
  };
</script>