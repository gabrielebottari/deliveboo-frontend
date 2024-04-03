<script>

export default {
    data() {
        return {

        };
    }
}
</script>


<template>

     <!-- JUMBO -->
     <section class="background-header">
        <div class="container d-flex align-items-center justify-content-center fs-1 flex-column">
            <h1>
                Deliveboo
            </h1>
            <h2>
                Buono da far paura
            </h2>

        </div>
    </section>
   


     <!-- CARDS -->

    <div class="card-container p-5">
        <div class="card">
            <a href="">
                <div class="card-img p-3">
                    <img src="/src/assets/img/cheeseburger.jpg" alt="cheesburger">
                </div>
                <div class="card-body">
                    <h5 class="card-title">Nome ristorante</h5>
                    <p class="card-text">Descrizione ristorante</p>
                </div>
            </a>
        </div>



        <div class="card">
            <a href="">
                <div class="card-img p-3">
                    <img src="/src/assets/img/margherita-pizza.jpg" alt="cheesburger">
                </div>
                <div class="card-body">
                    <h5 class="card-title">Nome ristorante</h5>
                    <p class="card-text">Descrizione ristorante</p>
                </div>
            </a>
        </div>


        <div class="card">
            <a href="">
                <div class="card-img p-3">
                    <img src="/src/assets/img/french-fries.jpg" alt="cheesburger">
                </div>
                <div class="card-body">
                    <h5 class="card-title">Nome ristorante</h5>
                    <p class="card-text">Descrizione ristorante</p>
                </div>
            </a>
        </div>
        

        <div class="card">
            <a href="">
                <div class="card-img p-3">
                    <img src="/src/assets/img/bbq-ribs.jpg" alt="cheesburger">
                </div>
                <div class="card-body">
                    <h5 class="card-title">Nome ristorante</h5>
                    <p class="card-text">Descrizione ristorante</p>
                </div>
            </a>
        </div>
    </div>



     <!-- CATEGORIES -->

     <div class="categories p-5">

            <div class="col">
                <a href="">CATEGORIA</a>
            </div>
            <div class="col">
                <a href="">CATEGORIA</a>
            </div>
            <div class="col">
                <a href="">CATEGORIA</a>
            </div>
            <div class="col">
                <a href="">CATEGORIA</a>
            </div>
            <div class="col">
                <a href="">CATEGORIA</a>
            </div>
            <div class="col">
                <a href="">CATEGORIA</a>
            </div>
            <div class="col">
                <a href="">CATEGORIA</a>
            </div>
            <div class="col">
                <a href="">CATEGORIA</a>
            </div>

     </div>

</template>

<style lang="scss" scoped>
    @import "../assets/scss/partials/homepage.scss";
    @import "../assets/scss/partials/variables.scss";
</style>