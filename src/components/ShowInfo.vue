<template>
  <v-card>
    <v-img
        v-if="showing === 'photo'"
        :src="chosen_image ? chosen_image : item.image"
        :lazy-src="chosen_image ? chosen_image : item.image"
        class="white--text"
        height="400px"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.2)"
    >
      <template v-slot:placeholder>
        <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
        >
          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
        </v-row>
      </template>
    </v-img>
    <gmap-street-view-panorama
        v-else-if="showing === 'gmap'"
        style="width: 100%; height: 400px"
        :position="item.coordinates">
    </gmap-street-view-panorama>
    <gmap-map
        v-else-if="showing === 'map'"
        :center="item.coordinates"
        style="width:100%;  height: 400px;"
        :zoom="15"
    >
      <template v-slot:placeholder>
        <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
        >
          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
        </v-row>
      </template>
      <gmap-marker
          :position="item.coordinates"
          :animation="2"
      />
    </gmap-map>
    <v-card-text>
      <v-row>
        <v-btn-toggle block="true" v-model="showing" mandatory>
          <v-btn text value="photo">
            Photo
          </v-btn>
          <v-btn text  value="gmap">
            GMap
          </v-btn>
          <v-btn text value="map">
            Map
          </v-btn>
        </v-btn-toggle>
      </v-row>
      <v-row>
        <v-col :cols="4">
          <v-row>
            <v-col :cols="6" v-for="(image, i) in item.images" :key="i" @click="chose_image(image)">
              <v-img
                  :src="image"
                  :lazy-src="image"
                  class="white--text"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.2)"
              >
                <template v-slot:placeholder>
                  <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                  >
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-col>
          </v-row>
        </v-col>
        <v-col>
          {{item.description}}
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>

</template>
<script>
  export default {
    name: 'ShowInfo',
    props: ["item"],
    data(){
      return {
        chosen_image: null,
        showing: "photo"

      }
    },
    methods: {
      chose_image(img){
        this.chosen_image = img;
        this.showing = "photo";
      },
    }
  }
</script>