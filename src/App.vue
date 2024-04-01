<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {
    data() {
        return {

        };
    },
    components: {
        AppHeader,
        AppMain,
        AppFooter
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
        
    </div>
</template>

<style lang="scss">
@use "assets/scss/main" as *;
@import "assets/scss/partials/reset";
.container-app{
    background-color: #F7CD1F;
}
</style>