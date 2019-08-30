<template>
  <v-col>
    <gmap-map
        :center="center "
        :zoom="15"
        style="width:100%;  height: 96vh;"
    >
      <gmap-marker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.coordinates"
          @click="infoWindowSelect(m,index)"
      />
      <GmapInfoWindow
          :opened="infoWindow.open"
          :position="infoWindow.positionW"
          :options="infoWindow.options"
          @closeclick="infoWinOpen=false">
        <marker-info :marker="infoWindow.content" />
      </GmapInfoWindow>
    </gmap-map>
  </v-col>
</template>

<script>
  import MarkerInfo from "./MarkerInfo";
  export default {
    name: "HomeMap",
    components:{
      MarkerInfo
    },
    data() {
      return {
        center: {
          lat: 0,
          lng: 0
        },
        infoWindow: {
          open: false,
          current: null,
          positionW: null,
          content: '',
          options: {
            pixelOffset: {
              width: 0,
              height: -35
            }
          },
        }
      };
    },
    mounted() {
      this.center = this.$store.getters.homes[0].coordinates;
      this.geolocate();
    },
    methods: {
      geolocate() {
        navigator.geolocation.getCurrentPosition(position => {
          this.center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
        });
      },
      infoWindowSelect(marker, idx){
        this.infoWindow.positionW = marker.coordinates;
        this.infoWindow.content = marker;
        if (this.infoWindow.current === idx) {
          this.infoWindow.open = !this.infoWindow.open;
        }
        else {
          this.infoWindow.open = true;
          this.infoWindow.current = idx;
        }
      }

    },
    watch: {
      chosen_home() {
        this.center = {
          lat: 0,
          lng: 0
        };
        this.$nextTick(() => {
          this.center = this.chosen_home.coordinates;
        })
      }
    },
    computed: {
      markers(){
        return this.$store.getters.homes
      },
      chosen_home(){
        return this.$store.getters.chosen_home
      },
    },
  };
</script>