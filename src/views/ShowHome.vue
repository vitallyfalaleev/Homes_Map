<template>
  <v-sheet
      class="overflow-y-auto"
      max-height="94vh">
    <v-container >
      <v-row>
        <v-col :cols="8" >
          <show-info :item="home" />
        </v-col>
        <v-col :cols="4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores aspernatur consequuntur fuga quaerat, quibusdam ullam. Ab dolores doloribus ea eligendi laudantium, quae ratione repellat, rerum saepe sapiente veniam, voluptatem!
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>
<script>
  import ShowInfo from "../components/ShowInfo";
  export default{
    name: 'show',
    components: {
      ShowInfo
    },
    data(){
      return {
        id: this.$route.params.id,
      }
    },
    computed: {
      home(){
        return this.$store.getters.home(this.id)
      },
    }
  }
</script>

