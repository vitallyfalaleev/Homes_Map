<template>
    <v-list-item>
        <v-list-item-content  @click="home_clicked(home)">
            <v-list-item-title v-html="home.title"></v-list-item-title>
            <v-list-item-subtitle v-html="home.address"></v-list-item-subtitle>
            <v-list-item-subtitle v-html="home.coordinates"></v-list-item-subtitle>
            <v-img
                src="home.image"
            ></v-img>
            <v-img
                src="https://assets.architecturaldesigns.com/plan_assets/324992268/large/23703JD_01_1553616680.jpg?1553616681"
            ></v-img>
        </v-list-item-content>
    </v-list-item>
</template>

<script>
    export default {
        props: [ "home" ],
        methods: {
            home_clicked(home){
                this.$store.dispatch("chose_home", home)
            }
        },
    };
</script>