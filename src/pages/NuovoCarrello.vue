<main class="bg-dark">
    <div class="container bg-primary">
        <!--Parte sinistra in cui selezionare le cose che vuoi da mangiare-->
        <h4>
            controlla il tuo ordine
        </h4>
        <!--CARTE CON CUI PAGARE-->
        <div class="bg-danger">
            <h5>
                Come vuoi pagare?
            </h5>
            <div class="bg-white">
                Mastercard
            </div>
            <div class="bg-secondary">
                Prova altri metodi di pagamento
            </div>
        </div>
        <div class="cart bg-danger text-white">
            <!-- ciclo per visualizzare i piatti -->
            <ul v-for="dish in dishes">
                <li class="cart-item row justify-content-evenly align-content-center">

                    <!-- img piatto -->
                    <div class="col-md-2">
                        <img :src=dish.img :alt=dish.name>
                    </div>

                    <!-- nome piatto -->
                    <div class="col-md-2">
                        <div id="dish-name">
                            {{ dish.name }}
                        </div>

                    <!-- ingredienti piatto -->
                        <div  id="dish-ingredients">
                            <button>Ingredienti</button>
                        </div>
                    </div>

                    <!-- quantità piatto -->
                    <div class="col-md-2">
                        <div id="dish-quantity">
                            {{ dish.quantity }}
                        </div>
                    </div>

                    <!-- prezzo piatto -->
                    <div class="col-md-2">
                        {{ dish.price }}
                    </div>
                </li>
            </ul>
            </div>
        <!--parte destra in cui ci sono le cose che hai selezionato-->
    </div>
</main>