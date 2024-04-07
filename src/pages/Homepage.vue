<script>
import axios from 'axios';

export default {
  data() {
    return {
      restaurants: [],
    };
  },
  mounted() {
    axios
        .get('http://127.0.0.1:8000/api/restaurants')
        .then(res=>{
            this.restaurants=res.data.results.data;
            console.log(this.restaurants)
        });
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
    <div class="categories-container">
        <div class="container">

            <div class="categories-container">
                <div class="container">
                    <h1 class="text-center text-black">Migliori categorie</h1>
                    <div class="restaurant-type-card">
                        <img src="/src/assets/img/cheeseburger.jpg" class="type-icon">
                        <h3>
                            {{ restaurants[6].activity_name }}
                            <!--PROVA-->
                        </h3>
                    </div>
                </div>
            </div>

            <div class="row row-cols-sm-3 row-cols-md-3 row-cols-lg-6 row-cols-xl-12 text-center bg-danger">
                <div class="col">
                  <button class="btn btn-categories px-3 py-2 col">
                        Cinese
                    </button>
                </div>
            </div>
        </div>
   </div>

    <!--CAROSELLO CON PIATTI CONSIGLIATI-->

    <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner text-center">

            <div class="carousel-item active ">
                <div class="card background-card-carousel">
                    <div class="img-wrapper rotondo">
                        <img src="../assets/img/cheeseburger.jpg" alt="...">
                    </div>
                    <div class="card-body my-3 background-card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn">Vai al piatto</a>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="card background-card-carousel">
                    <div class="img-wrapper">
                        <img src="../assets/img/margherita-pizza.jpg" alt="...">
                    </div>
                    <div class="card-body my-3 background-card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn">Vai al piatto</a>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="card background-card-carousel">
                    <div class="img-wrapper">
                        <img src="../assets/img/bbq-ribs.jpg" alt="...">
                    </div>
                    <div class="card-body my-3 background-card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn">Vai al piatto</a>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="card background-card-carousel">
                    <div class="img-wrapper">
                        <img src="../assets/img/french-fries.jpg" alt="...">
                    </div>
                    <div class="card-body my-3 background-card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn">Vai al piatto</a>
                    </div>
                </div>
            </div>
        </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="custom-icon" aria-hidden="true"><i class="fa-solid fa-greater-than fa-rotate-180"></i></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="custom-icon" aria-hidden="true"><i class="fa-solid fa-greater-than"></i></span>
            </button>
    </div>
   <!--Fine Carosello-->

    <!--Parte dell'homepage che conterrà le mappe oppure un consiglio di ristoranti-->
    <!--
    <section class="section-map">
        
        <div class="container container-section-map">
            <div class="row">
                <div class="col-12 col-md-4 col-lg-3">
                    <div class="main-content">
                        <h1>
                            Controlla dove sono i tuoi ordini
                        </h1>

                        <p>
                            Puoi seguire tutti gli spostamenti del tuo cibo, attraverso il rider che te lo consegnerà!
                        </p>

                        <div class="download-map-menu mt-4 justify-content-evenly d-flex">
                            
                            <div class="btn">
                                Play store
                            </div>

                            <div class="btn">
                                Mac
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-8 col-lg-8">
                    <div class="card p-4 card-map">
                        <h3>
                            Mappa
                        </h3>
                        <div class="map-wrapper">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92181.05523497718!2d11.240967900000001!3d43.77995815000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a56a680d2d6ad%3A0x93d57917efc72a03!2sFirenze%20FI!5e0!3m2!1sit!2sit!4v1711868064989!5m2!1sit!2sit" 
                                width="600" 
                                height="450" 
                                style="border:0;" 
                                allowfullscreen="" 
                                loading="lazy" 
                                referrerpolicy="no-referrer-when-downgrade"
                                class="">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
    -->
</template>

<style lang="scss" scoped>
    @import "../assets/scss/partials/homepage.scss";
    @import "../assets/scss/partials/variables.scss";
</style>