<script>

export default {
    data() {
        return {

        };
    }
}
</script>


<template>

     <!--CONCEPT BACKGROUND HEADER,-->
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
    <!--FINE BACKGROUND HEADER-->

    <!--Carosello con i piatti-->
    <!--Metterci i migliori in base alle valutazioni?-->
    <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">

            <div class="carousel-item active ">
                <div class="card background-card-carousel">
                    <div class="img-wrapper rotondo">
                        <img src="../assets/img/cheeseburger.jpg" alt="...">
                    </div>
                    <div class="card-body my-3 background-card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
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
                        <a href="#" class="btn btn-primary">Go somewhere</a>
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
                        <a href="#" class="btn btn-primary">Go somewhere</a>
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
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
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
   
   <!--parte dell'homepage che contiene LE CATEGORIE-->
   <div class="categories-container">
    <div class="container py-5">
        <h1 class="text-center">
            Migliori categorie
        </h1>

        <div class="row row-cols-1 row-cols-md-3 g-4 py-5">

            <div class="col">
                <div class="card categories-card">
                    <img src="../assets/img/cheeseburger.jpg" class="card-img-top" alt="...">
                    <div class="card-body text-center">
                        <h3 class="card-title">Cinese</h3>
                        <p class="card-text">
                            I migliori ristoranti cinesi
                        </p>
                    </div>
                    <div class="d-flex justify-content-around mb-5">
                        <a href="#" class="btn">Vai alla pagina</a>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card categories-card">
                    <img src="../assets/img/cheeseburger.jpg" class="card-img-top" alt="...">
                    <div class="card-body text-center">
                        <h3 class="card-title">Cinese</h3>
                        <p class="card-text">
                            I migliori ristoranti cinesi
                        </p>
                    </div>
                    <div class="d-flex justify-content-around mb-5">
                        <a href="#" class="btn">Vai alla pagina</a>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card categories-card">
                    <img src="../assets/img/cheeseburger.jpg" class="card-img-top" alt="...">
                    <div class="card-body text-center">
                        <h3 class="card-title">Cinese</h3>
                        <p class="card-text">
                            I migliori ristoranti cinesi
                        </p>
                    </div>
                    <div class="d-flex justify-content-around mb-5">
                        <a href="#" class="btn">Vai alla pagina</a>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card categories-card">
                    <img src="../assets/img/deliveboo.png" class="card-img-top" alt="...">
                    <div class="card-body text-center">
                        <h3 class="card-title">Cinese</h3>
                        <p class="card-text">
                            I migliori ristoranti cinesi
                        </p>
                    </div>
                    <div class="d-flex justify-content-around mb-5">
                        <a href="#" class="btn">Vai alla pagina</a>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card categories-card">
                    <img src="../assets/img/deliveboo.png" class="card-img-top" alt="...">
                    <div class="card-body text-center">
                        <h3 class="card-title">Cinese</h3>
                        <p class="card-text">
                            I migliori ristoranti cinesi
                        </p>
                    </div>
                    <div class="d-flex justify-content-around mb-5">
                        <a href="#" class="btn">Vai alla pagina</a>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card categories-card">
                    <img src="../assets/img/deliveboo.png" class="card-img-top" alt="...">
                    <div class="card-body text-center">
                        <h3 class="card-title">Cinese</h3>
                        <p class="card-text">
                            I migliori ristoranti cinesi
                        </p>
                    </div>
                    <div class="d-flex justify-content-around mb-5">
                        <a href="#" class="btn">Vai alla pagina</a>
                    </div>
                </div>
            </div>
        </div>
    
   </div>
   </div>

</template>

<style lang="scss" scoped>
    @import "../assets/scss/partials/homepage.scss";
    @import "../assets/scss/partials/variables.scss";
</style>