<script>
import axios from 'axios';

import { store } from '../store'



export default {
    data() {
        return {
            store,
            SingleRestourant
            };
},

    created () {

        axios
            .get(this.store.restourantsUrl)
            .then((response) => {
                // console.log("")
                // console.log("dalla homepage")
                // console.log(response.data.results.data)

                this.restourants = response.data.results.data
                // console.log(this.restourants)
        });
    },
};


</script>

<template>
    <section>
        <div class="container">
            <div class="restourant-img">
                <img src="" alt="Img Ristorante">
            </div>
            <div class="restourant-name">
                {{ restourants[1].activity_name }}
            </div>
            <div class="restourant-description">
                {{ restourants[1].description }}
            </div>
            <div class="restourant-address">
                {{ restourants[1].address }}
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>



</style>