<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js">

export default {
    data() {
        return {

        };
    },
    methods: {

    }
}
</script>


<template>
    <!--Header che si ricollega all'header generale-->
    <header>
        <!--Container principale dell'header della homepage, che si ricollegherà all'header generale-->
        <div class="row container-fluid">

        <!--QUI è LA PRIMA PARTE DELLA HOMEPAGE-->
            <!--Questa è la parte sinistra della homepage-->
            <div class="col container-fluid homepage-header-left">
                <!--vuoto-->
            </div>
            <!--Questa è la parte destra della homepage-->
            <div class="col container-fluid homepage-header-right pt-5">

                <h2 class="text-center title-research-bar">
                    I migliori piatti che puoi trovare in circolazione
                </h2>
                        
                <!--ricerca per indirizzo-->
                <nav class="navbar justify-content-around" id="search-address">
                        <form class="d-flex" role="search">
                        <!--placeholder con indirizzo-->
                        <input class="form-control me-2" type="search" placeholder="Inserisci il tuo indirizzo" aria-label="Search">
                        <!--tasto per far partire la ricerca-->
                        <button class="btn btn-outline-success bg-white" type="submit">Cerca</button>
                        </form>
                </nav>       

            </div>
        </div>
        
    </header>

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
                Immagine che ricorda città
            </div>
            <h2 class="text-center mb-5">
                Città Principali
            </h2>

            <!--div contenente bottoni per le città-->
            <div class="d-flex justify-content-around">
                
                <button type="button" class="btn btn-danger dropdown-toggle py-2 px-5" data-bs-toggle="dropdown" aria-expanded="true">
                    Roma
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Parioli</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#">Separated link</a></li>
                </ul>

                <button type="button" class="btn btn-danger dropdown-toggle py-2 px-5" data-bs-toggle="dropdown" aria-expanded="false">
                    Action
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#">Separated link</a></li>
                </ul>

                <button type="button" class="btn btn-danger dropdown-toggle py-2 px-5" data-bs-toggle="dropdown" aria-expanded="false">
                    Action
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#">Separated link</a></li>
                </ul>

                

            </div>
            
        </div>

   </div>
</template>

<style lang="scss" scoped>
    header{
        background-image: url(/src/assets/img/deliveboo.png);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .homepage-header-left {
        height: 700px;
    }
    .homepage-header-left > img {
        max-width: 300px;
    }
    #search-address{
      margin-top: 100px;
    }
    .title-research-bar{
        font-size: 40px;
    }
</style>