<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import AppCarrello from './components/AppCarrello.vue';

export default {
    data() {
        return {

        };
    },
    components: {
        AppHeader,
        AppMain,
        AppFooter,
        AppCarrello
    },  
    methods: {

    }
}
</script>

<template>

    <div class="container-app">

        <AppHeader />

        <AppMain />

        <AppFooter />

        <AppCarrello />
        
    </div>
</template>

<style lang="scss">
@use "assets/scss/main" as *;
@import "assets/scss/partials/reset";
@import "assets/scss/partials/variables.scss";
.container-app{
    background-color: $tertiary;
}
</style>