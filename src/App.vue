<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import AppCarrello from './components/AppCarrello.vue';


import axios from 'axios';
import { store } from './store'


export default {
    data() {
        return {
            store,
            restourants:[]
        };
    },
    components: {
        AppHeader,
        AppMain,
        AppFooter,
        AppCarrello
    },  
    methods: {
    },
    created () {
        axios
            .get(this.store.baseUrl)
            // .get('http://127.0.0.1:8000/api/restaurants')
            .then((response) => {
                // console.log(response.data.results.data);
                this.restourants = response.data.results.data;
                console.log(this.restourants[1].activity_name)

        });
    }
}
</script>

<template>
    <AppHeader />

    <AppMain />

    <AppFooter />

    <AppCarrello />
</template>

<style lang="scss">
@use "assets/scss/main" as *;
@import "assets/scss/partials/reset";

@import "assets/scss/partials/variables.scss";
.container-app{
    background-color: $tertiary;
}
</style>