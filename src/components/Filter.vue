<template>
  <v-card>
    <v-toolbar
        flat
        color="transparent"
    >
      <v-toolbar-title>Filters</v-toolbar-title>
      <div class="flex-grow-1"></div>
      <v-btn
          icon
          @click="show = !show"
      >
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>
    <v-container class="py-0">
      <v-row>
        <v-col
            v-for="(selection, i) in selections"
            :key="selection.text"
            class="shrink"
        >
          <v-chip
              :disabled="loading"
              close
              @click:close="selected.splice(i, 1)"
          >
            <v-icon
                left
                v-text="selection.icon"
            ></v-icon>
          </v-chip>
        </v-col>
      </v-row>
    </v-container>
    <v-expand-transition>
      <div v-show="show">
        <v-container class="py-0">
          <v-row
              align="center"
              justify="start"
          >
            <v-col cols="12">
              <v-text-field
                  ref="search"
                  v-model="search"
                  full-width
                  hide-details
                  label="Search"
                  single-line
              ></v-text-field>

            </v-col>
          </v-row>
          <v-row align="center" justify="start">
            <v-col cols="12">
              <v-btn-toggle v-model="time" mandatory>
                <v-btn text block="true" value="day">
                  Day
                </v-btn>
                <v-btn text block="true" value="week">
                  Week
                </v-btn>
                <v-btn text block="true" value="month">
                  Month
                </v-btn>
              </v-btn-toggle>
            </v-col>
            <v-col cols="12">
              <v-range-slider
                  v-model="value"
                  thumb-label="always"
              ></v-range-slider>
            </v-col>
          </v-row>
        </v-container>

        <v-divider v-if="!allSelected"></v-divider>

        <v-list>
          <template v-for="(item, i) in categories">
            <v-list-item
                v-if="!selected.includes(i)"
                :key="i"
                :disabled="loading"
                @click="selected.push(i)"
            >
              <v-list-item-avatar>
                <v-icon
                    :disabled="loading"
                    v-text="item.icon"
                ></v-icon>
              </v-list-item-avatar>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item>
          </template>
        </v-list>
      </div>
    </v-expand-transition>
  </v-card>
</template>
<script>
  export default {
    name: 'Filters',
    data: () => (
        {
          items: [
            {
              text: 'Wi-Fi',
              icon: 'mdi-wifi',
            },
            {
              text: 'Kitchen',
              icon: 'mdi-food-fork-drink',
            },
            {
              text: 'Laundry',
              icon: 'mdi-washing-machine',
            },
            {
              text: 'Heating',
              icon: 'mdi-home-thermometer',
            },
            {
              text: 'Parking',
              icon: 'mdi-parking',
            },
            {
              text: 'Smoking',
              icon: 'mdi-smoking',
            },
            {
              text: 'Dryer',
              icon: 'mdi-tumble-dryer',
            },
            {
              text: 'Fully Furnished',
              icon: 'mdi-bed-king',
            },
          ],
          search: '',
          selected: [],
          value: [0, 600],
          show: true,
          time: "day"
        }
    ),

    computed: {
      allSelected () {
        return this.selected.length === this.items.length
      },
      categories () {
        const search = this.search.toLowerCase()

        if (!search) return this.items

        return this.items.filter(item => {
          const text = item.text.toLowerCase()

          return text.indexOf(search) > -1
        })
      },
      selections () {
        const selections = []

        for (const selection of this.selected) {
          selections.push(this.items[selection])
        }

        return selections
      },
    },

    watch: {
      selected () {
        this.search = ''
      },
      time(){
        if(this.time === "day"){
          this.value = [5, 10]
        }
        else if( this.time === "week"){
          this.value = [50, 100]
        }
        else if( this.time === "month"){
          this.value = [500, 1000]
        }
      },
    }
  }
</script>
<style scoped>
  .v-chip .v-avatar--left, .v-chip .v-icon--left{
    margin-right: 0;
  }
  .v-chip .v-avatar--right, .v-chip .v-icon--right{
    margin-left: 0;
  }
  .shrink{
    padding: 5px;
  }
</style>