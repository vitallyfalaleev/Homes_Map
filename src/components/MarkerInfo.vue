<template>
    <v-card
        :width="344"
        :height="undefined"
        class="mx-auto"
    >
      <v-img
          class="white--text"
          height="200px"
          :src="marker.image"
      >
        <v-card-title class="align-end fill-height">{{ marker.title }}</v-card-title>
      </v-img>
      <v-card-text>{{ marker.address }}</v-card-text>
        <v-simple-table>
          <tr>
            <td>{{marker.prices.day ? marker.prices.day : '-N.A-' }}$ / day</td>
            <td>{{marker.prices.week ? marker.prices.week : '-N.A-'}}$ / week</td>
            <td>{{marker.prices.monthly ? marker.prices.monthly : '-N.A-'}}$ / month</td>
          </tr>
        </v-simple-table>
    </v-card>
</template>
<script>
  export default {
    props: [ "marker" ],
    name: "MarkerInfo",
  };
</script>