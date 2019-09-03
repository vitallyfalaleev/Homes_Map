<template>
  <v-app>
    <v-app-bar
        absolute
        color="white"
        elevate-on-scroll
        scroll-target="#scrolling"
    >
      <v-tabs
          align-with-title
          background-color="transparent"
      >
        <v-tab to="/">home</v-tab>
        <v-tab to="/about">about</v-tab>
      </v-tabs>
    </v-app-bar>
    <v-sheet
      id="scrolling"
      class="overflow-y-auto"
      max-height="100vh-64px">
        <v-content>
          <router-view/>
        </v-content>
    </v-sheet>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
    components: {
    },
    data: () => ({
      //
    }),
  };
</script>

<style lang="scss">
  @import "assets/page";
  #scrolling{
    margin-top: 64px;
  }
</style>
