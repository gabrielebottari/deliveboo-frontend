<script>
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

    <!---->
    <div>

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