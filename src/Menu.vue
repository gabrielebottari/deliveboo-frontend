<script>
export default {
    
}
</script>

<template>
    <div class="container pt-4 pb-4">
        <div class="container-menu">
            
            <!--INFORMAZIONI RISTORANTE-->
            <div class="row info-risto first-page">
                <div class="col-4">
                    <img src="./assets/img/esempio-img-progetto.jpg" alt="">
                </div>
                <div class="col-8 btn-info-restaurant">
                    <h2 class="text-left">
                        Menu le tre posate
                    </h2>
                    <small>
                        35 min
                    </small>
                    <br>
                    <span class="badge badge-secondary">Premium</span>
                    <small>
                        Consegna gratuita se hai il premium
                    </small>
                    <br>
                    <div class="btn-group dropend">
                        <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Intolleranza?
                        </button>
                        <ul class="dropdown-menu">
                            <li class="bg-danger">
                                Glutine
                            </li>
                            <li>
                                Lattosio
                            </li>
                        </ul>
                    </div>
                    <p>
                        SIAMO UN RISTORANTE,....

                    </p>
                </div>
                <div class="col-8 btn-info-restaurant-second">
                    <button class="btn btn-primary">
                        sdf
                    </button>
                </div>
            </div>

            <!--navbar-->

            <div class="row navbar-menu second-page">
                <div class="col-1 p-3">
                    <button class="btn">
                       <a href="#">Novità</a>
                    </button>
                </div>
                <div class="col-1 p-3">
                    <button class="btn">
                       <a href="#">Novità</a>
                    </button>
                </div>
                <div class="col-1 p-3">
                    <button class="btn">
                       <a href="#">Novità</a>
                    </button>
                </div>
                <div class="col-1 p-3">
                    <button class="btn">
                       <a href="#">Novità</a>
                    </button>
                </div>
                <div class="col-1 p-3">
                    <button class="btn">
                       <a href="#">Novità</a>
                    </button>
                </div>
                <div class="col-1 p-3">
                    <button class="btn">
                       <a href="#">Novità</a>
                    </button>
                </div>
                <div class="col-1 p-3">
                    <button class="btn">
                       <a href="#">Novità</a>
                    </button>
                </div>
                <div class="col-1 p-3">
                    <button class="btn">
                       <a href="#">Novità</a>
                    </button>
                </div>
                <div class="col-1 p-3">
                    <button class="btn">
                       <a href="#">Novità</a>
                    </button>
                </div>
                <div class="col-1 p-3">
                    <button class="btn">
                       <a href="#">Novità</a>
                    </button>
                </div>
                <div class="col-1 p-3">
                    <button class="btn">
                       <a href="#">Novità</a>
                    </button>
                </div>

                

            </div>

            <!--fine navbar-->

            <!--I VARI PIATTI E AGGIUNGERLI-->
            <div class="row third-page">
                <div class="col-lg-3 col-md-4 col-sm-1 text-center">
                    <div class="card mb-3 active" style="width: 800px;  height: 400px; background-color: black;">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="../src/assets/img/deliveboo.png" class="img-fluid rounded-start" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>  
                    </div>
                    <button class="bottone-prova" onclick="toggleDiv()">
                        ciaso
                    </button>
                    <div class="card mb-3 nascosta" style="width: 800px;  height: 400px; background-color: black;">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="../src/assets/img/bbq-ribs.jpg" class="img-fluid rounded-start" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>  
                    </div>
                    
                </div>
                
            </div>
            <!--fine row-->
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
@import "./assets/scss/partials/menu.scss";
</style>