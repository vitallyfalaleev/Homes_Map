<template>
    <v-list-item :ripple="false"
        :to="{ name: 'show', params: { id: home.id }}">
                <v-list-item-avatar tile
                    :height="150"
                    :width="200"
                    @click="home_clicked(home)">
                    <v-img
                        :src="home.image"
                    ></v-img>
                </v-list-item-avatar>
        <div class="content">
            <div class="house-info">
                <v-list-item-title v-text="home.title"></v-list-item-title>
                <v-list-item-subtitle v-text="home.address"></v-list-item-subtitle>
                <v-chip v-if="option === true" v-for="(option, key) in options"
                        small
                        outlined>
                    <v-icon small
                         >
                        {{showOption(key)}}
                    </v-icon>
                </v-chip>
            </div>
            <div class="actions">
                <v-rating readonly :value="home.rating" dense :size="20" background-color="orange lighten-3" color="orange"></v-rating>
                <v-btn text icon class="location"
                       @click="home_clicked(home)"
                       color="red">
                    <v-icon dense>mdi-map-marker</v-icon>
                </v-btn>
            </div>
        </div>
        <div class="price">
            <ul v-if="home.prices">
                <li>{{ home.prices.day ? home.prices.day : '-N.A-' }}$ / day</li>
                <li>{{ home.prices.week ? home.prices.week : '-N.A-' }}$ / week</li>
                <li>{{ home.prices.monthly ? home.prices.monthly : '-N.A-' }}$ / month</li>
            </ul>
            <ul v-else >
                <li>{{ home.prices ? home.prices.day : '-N.A-' }}$ / day</li>
                <li>{{ home.prices ? home.prices.week : '-N.A-' }}$ / week</li>
                <li>{{ home.prices ? home.prices.monthly : '-N.A-' }}$ / month</li>
            </ul>

        </div>
    </v-list-item>
</template>

<script>
    export default {
        props: [ "home" ],
        data(){
            return{
                options: []
            }
        },
        methods: {
            home_clicked(home){
                this.$store.dispatch("chose_home", home)
            },
            showOption(option){
                let item = this.items.find(e => e.option === option);
                return item ? item.icon : ''
            }
        },
        mounted() {
            this.options = this.home.options
        },
        computed: {
            items(){
                return this.$store.getters.items
            }
        }
    };
</script>

<style scoped lang="scss">
.v-list{
    &-item{
        display: grid;
        grid-template-columns: 200px auto 170px;
        grid-column-gap: 24px;
        &:not(:last-child){
            border-bottom: 1px solid dimgray;
        }
    }
}
.price{
    width: 170px;
    ul{
        list-style: none;
        li{
            height: 55.66px;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            text-align: left;
        }
    }
}
.content{
    margin-top: 8px;
    margin-bottom: 8px;
    height: 150px;
    display: grid;
    grid-template-rows: auto auto;
    justify-content: space-between;
    /*.house-info, .actions{*/
    /*    width: 100%;*/
    /*    display: flex;*/
    /*}*/
    .actions{
        display: flex;
        width: 190px;
        justify-content: space-between;
        align-items: flex-end;
    }
}
</style>