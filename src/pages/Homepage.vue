<script>
import axios from 'axios';

export default {
  data() {
    return {
        };
    },
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
    <!-- <div class="categories-container p-4">
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
    </div> -->

    <!--CARD CON RISTORANTI CONSIGLIATI-->

        
    <!-- <section class="cards">
        <div class="row p-4">
            <div class="my-card col-lg-3 col-md-5 p-3 m-2" v-for="(restaurant, i) in restaurants">
                <a :href="/menu/ + restaurants[i].id" @click="navigateToSingleRestaurant(id)">
                    <div class="card-img" :id="this.restaurants[i].id">
                        <img :src="this.restaurants[i].image" alt="img ristorante">
                    </div>
                    <div class="my-card-body">
                        <div class="my-card-title p-2">
                            <h5>{{ this.restaurants[i].activity_name }}</h5>
                        </div>
                        <div class="my-card-description p-3">
                            <p>{{ this.restaurants[i].description }}</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </section> -->

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