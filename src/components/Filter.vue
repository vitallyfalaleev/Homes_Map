<template>
  <v-card>
    <v-toolbar
        flat
        color="transparent"
        @click="show = !show"
    >
      <v-toolbar-title>Filters</v-toolbar-title>
      <div class="flex-grow-1"></div>
      <v-btn
          icon
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
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
            <v-col class="mb-5" cols="12">
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
                  v-model="price"
                  :min="minPrice"
                  :max="maxPrice"
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
          search: '',
          selected: [],
          price: [5, 600],
          minPrice: 0,
          maxPrice: 0,
          show: false,
          time: "day"
        }
    ),
    beforeMount(){
      this.minPrice = this.price[0];
      this.maxPrice = this.price[1];
      this.timeChose()
      this.$nextTick(() => {
        this.time;
      });
    },
    computed: {
      items(){
        return this.$store.getters.items
      },
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
      timeChose () {
        if(this.time === "day"){
          this.price = [5, 10];
          this.minPrice = this.price[0];
          this.maxPrice = this.price[1];
        }
        else if( this.time === "week"){
          this.price = [50, 100]
          this.minPrice = this.price[0];
          this.maxPrice = this.price[1];
        }
        else if( this.time === "month"){
          this.price = [500, 1000]
          this.minPrice = this.price[0];
          this.maxPrice = this.price[1];
        }
      },
    },

    watch: {
      selected () {
        this.search = ''
      },
      time(){
        this.timeChose()
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