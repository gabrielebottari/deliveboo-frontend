<script>
import axios from 'axios';

import { store } from '../store';


export default {
  data() {
    return {
        store,
        restourants: [],
        types:[],

        SearchType:"",
        SelectedType: 'all',
    };

},
    methods: {
        GetFirstsRestourant() {
            while (i < 4) {
                {{ this.restourants[i].activity_name }}
                i++;

                return this.restourants.activity_name
            }
        }
    },
    created () {
        axios
            .get(this.store.restourantsUrl)
            .then((response) => {
                // console.log("")
                // console.log("dalla homepage")
                // console.log(response.data.results.data)

                this.restourants = response.data.results.data.slice( 0, 4)
                // console.log(this.restourants)
            });



        axios
            .get(this.store.typesUrl)
            .then(response => {
                // console.log("chiamata ai tipi")
                // console.log(response.data.results)
                
                this.types = response.data.results
                console.log(this.types)
            })
    },
    computed: {
        FilteredTypes () {
            if (this.SelectedType == 'all') {
                return this.types
            } else {
                return this.restourants.filter(restourant => restourants.types.name == this.SelectedType)
            }
        }
    }
};
</script>

<template>
    

     <!--SECTION HERO-->
     <div class="container-fluid">
        <section class="background-header">
        <div class="container d-flex align-items-center justify-content-center fs-1 text-white flex-column">
            <h1>
                Deliveboo
            </h1>
            <h2>
                Buono da far paura
            </h2>

        </div>
    </section>
     </div>
    <!--FINE SECTION HERO-->

    <!--parte dell'homepage che contiene LE CATEGORIE-->
    <div class="categories-container p-4">
        <div class="container">
            <div class="container">
                <h1 class="text-center text-black">Migliori categorie</h1>
                <div class="row">
                    <div class="col-2 pt-4" v-for="(type, j) in types">
                        <a href="" class="type-button" :name="types.name">
                            {{ types[j].name }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--CARD CON RISTORANTI CONSIGLIATI-->

    <section class="cards">
        <div class="row p-4">
            <div class="my-card col-2 p-3" v-for="(restourant, i) in restourants">
                <div v-if="i < 4">
                    <a href="">
                        <div class="card-img" >
                            <img :src="this.restourants[i].image" alt="img ristorante">
                        </div>
                        <div class="my-card-body">
                            <div class="my-card-title p-2">
                                <h5>{{ this.restourants[i].activity_name }}</h5>
                            </div>
                            <div class="my-card-description p-3">
                                <p>{{ this.restourants[i].description }}</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>

   <!--Fine Card-->
</template>

<style lang="scss" scoped>
    @import "../assets/scss/partials/homepage.scss";
    @import "../assets/scss/partials/variables.scss";



    // BOTTONI CATEGORIE

    .categories-container
    {
        a
        {
            text-decoration: none;
            font-weight: 500;
            font-size: 1.1rem;
            padding: 10px 15px;
            border: 2px solid $primary;
            border-radius: 30px;
            color: $primary;
        }

        a:hover
        {
            color: $tertiary;
            border: 2px solid $primary;
            background-color: $primary;
        }
    }


    // CARD

    .cards
    {
        background-color: $secondary;

        .row{
            margin: 0 auto;
            justify-content: space-evenly;
            
            .my-card
            {
                margin: 10px;
                color: $secondary;
                border-radius: 10px;
                background-color: $primary;

                a
                {
                    text-decoration: none;
                    color: $secondary;

                    p
                    {
                        margin-bottom: 0;
                    }
                }
                
                a:hover
                {
                    color: $secondary;
                }
            }
        }
    }


    
</style>