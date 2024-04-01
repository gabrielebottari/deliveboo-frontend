<script>

export default {

  data() {
    return {
      dishes: [
          {
              name: "pollo al curry",
              quantity: 1,
              img: "",
              price: "10,00 €"
          },
          {
              name: "polenta e funghi",
              quantity: 3,
              img: "",
              price: "9,00 €"
  
          },
          {
              name: "Carbonara",
              quantity: 5,
              img: "",
              price: "8,00 €"
  
          },
          {
              name: "Cesar salad",
              quantity: 4,
              img: "",
              price: "7,00 €"
          },
          ],
        };
  },
};
</script>

<template class="bg-secondary">
    <main class="bg-dark">
        <div class="container bg-primary">
            <!--Parte sinistra in cui selezionare le cose che vuoi da mangiare-->
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
</template>

<style lang="scss" scoped>
    @import "../assets/scss/partials/carrello.scss";
</style>