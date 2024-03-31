<script>

export default {
    data() {
        return {

        };
    }
}
</script>


<template>

    <!--Carosello con i piatti-->
    <!--Metterci i migliori in base alle valutazioni?-->
    <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">

            <div class="carousel-item active">
                <div class="card">
                    <div class="img-wrapper">
                        <img src="../assets/img/cheeseburger.jpg" alt="...">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="card">
                    <div class="img-wrapper">
                        <img src="../assets/img/margherita-pizza.jpg" alt="...">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="card">
                    <div class="img-wrapper">
                        <img src="../assets/img/bbq-ribs.jpg" alt="...">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="card">
                    <div class="img-wrapper">
                        <img src="../assets/img/french-fries.jpg" alt="...">
                    </div>
                    <div class="card-body">
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
    <div class="p-5 bg-danger justify-content-center d-flex">
        <!--homepage, mappe?? consigli ristoranti??-->
        <div class="card mb-3 p-5" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                <img src="..." class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">Esempio</h5>
                    <p class="card-text">Mappe? Ristoranti consigliati?</p>
                    <p class="card-text"><small class="text-body-secondary">Da decidere</small></p>
                </div>
                </div>
            </div>
        </div>

    </div>
   
   <!--parte dell'homepage che contiene una serie di bottoni per link-->
   <div class="p-5">

        <!--bottoni per le città-->

        <div>

            <div class="text-center mb-3">
                Immagine città
            </div>
            <h2 class="text-center mb-5">
                Città
            </h2>

            <!--div contenente bottoni per le categorie-->
            <div class="d-flex justify-content-around">
                
                <button type="button" class="btn btn-success">Roma</button>

                <button type="button" class="btn btn-success">Firenze</button>

                <button type="button" class="btn btn-success">Milano</button>

            </div>

        </div>        

        <!--bottoni per le Categorie-->
        <div>

            <div class="text-center mb-3">
                Immagine categorie
            </div>
            <h2 class="text-center mb-5">
                Categorie
            </h2>

            <!--div contenente bottoni per le categorie-->
            <div class="d-flex justify-content-around">
                
                <button type="button" class="btn btn-success">Primi</button>

                <button type="button" class="btn btn-success">Secondi</button>

                <button type="button" class="btn btn-success">Dolci</button>

            </div>

        </div>
        
   </div>
  

</template>

<style lang="scss" scoped>
    @import "../assets/scss/partials/homepage.scss";
</style>