<template>
  <v-col>
    <gmap-map
        ref="mapRef"
        :center="center"
        :panTo="next"
        :zoom="15"
        style="width:100%;  height: 96vh;"
        :options="styles"
    >
      <gmap-marker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.coordinates"
          :animation="2"
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
        next: {
          lat: 0,
          lng: 0
        },
        styles:
          {styles: [
              {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
              {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
              {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
              {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
              },
              {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
              },
              {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{color: '#263c3f'}]
              },
              {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#6b9a76'}]
              },
              {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#38414e'}]
              },
              {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{color: '#212a37'}]
              },
              {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{color: '#9ca5b3'}]
              },
              {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#746855'}]
              },
              {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#1f2835'}]
              },
              {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{color: '#f3d19c'}]
              },
              {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{color: '#2f3948'}]
              },
              {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
              },
              {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{color: '#17263c'}]
              },
              {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#515c6d'}]
              },
              {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#17263c'}]
              }

            ]}
        ,
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
        this.next = this.chosen_home.coordinates;
        this.$nextTick(() => {
          this.$refs.mapRef.$mapPromise.then((map) => {
            map.panTo(this.next)
          })
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