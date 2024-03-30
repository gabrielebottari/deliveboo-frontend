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



<template>
    <main>
        <div class="container">
            <div class="cart">

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
        </div>
    </main>
</template>

<style scoped>

ul,ol
{
    list-style: none;

    li
    {
        padding: 10px;
    }
}

main .container 
{
    margin: 50px auto;
    border: 1px solid grey;
    border-radius: 15px;

    .cart
    {
        .cart-item
        {
            border-bottom: 1px solid grey;
            text-align: center;

            #dish-name
            {
                margin-bottom: 10px;
            }

            #dish-ingredients
            {
                button
                {
                    padding: 5px 10px;
                    border-radius: 5px;
                    background-color: white;
                }
                button:hover
                {
                    background-color: lightpink;
                    box-shadow: 3px 3px 5px rgb(0 0 0 / 50%);;
                    transition-duration: 0.3s;
                }
            }
        }
    }
}

</style>