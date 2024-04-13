<script>
import axios from 'axios';

export default {
  data() {
    return {
      restaurant: { plates: [] },
      cart: []
    };
  },
  methods: {
    addToCart(plate, quantity = 1) {
        // Controlla se il carrello ha già elementi e se il ristorante corrisponde
        if (this.cart.length > 0 && this.cart[0].restaurantId !== plate.restaurant_id) {
        alert("Non puoi aggiungere piatti da ristoranti diversi nel carrello!");
        return;
        }

        let cartItem = this.cart.find(item => item.plateId === plate.id);
        if (cartItem) {
        cartItem.quantity += quantity;
        } else {
        this.cart.push({
            plateId: plate.id,
            restaurantId: plate.restaurant_id,  // Assicurati di aggiungere anche l'ID del ristorante
            name: plate.name,
            price: plate.price,
            quantity: quantity
        });
        }
        this.updateLocalStorage();
    },

    decreaseQuantity(plateId) {
        const cartItem = this.cart.find(item => item.plateId === plateId);
        if (cartItem) {
        if (cartItem.quantity > 1) {
            cartItem.quantity -= 1;
        } else {
            // Se la quantità è 1, rimuovi l'articolo dal carrello
            this.removeFromCart(plateId);
        }
        this.updateLocalStorage();
        }
    },

    removeFromCart(plateId) {
      const index = this.cart.findIndex(item => item.plateId === plateId);
      if (index > -1) {
        this.cart.splice(index, 1);
        this.updateLocalStorage();
      }
    },
    updateLocalStorage() {
        localStorage.setItem('cart', JSON.stringify(this.cart));
        console.log('Carrello salvato nel localStorage:', JSON.stringify(this.cart));
    },

    fetchRestaurantData() {
      axios.get(`http://127.0.0.1:8000/api/restaurants/${this.$route.params.id}`)
        .then(response => {
          this.restaurant = response.data.results;
        })
        .catch(error => {
          console.error('Error fetching restaurant data:', error);
        });
    },
    loadFromLocalStorage() {
      const storedCart = localStorage.getItem('cart');
      this.cart = storedCart ? JSON.parse(storedCart) : [];
    }
  },
  created() {
    this.fetchRestaurantData();
    this.loadFromLocalStorage();
  }
};
</script>
<template>
    <div class="restaurant-menu">
      <div class="section-restaurant-detail">
        <div>
          <img :src="restaurant.image" alt="Immagine del ristorante">
          <div>
            <h2>{{ restaurant.activity_name }}</h2>
            <p>{{ restaurant.address }}</p>
            <p>{{ restaurant.description }}</p>
            <h6>P.IVA: {{ restaurant.VAT_number }}</h6>
          </div>
        </div>
      </div>
  
      <div class="section-menu">
        <h2>Il nostro menù:</h2>
        <div v-for="plate in restaurant.plates" :key="plate.plate_id">
          <div>
            <img :src="plate.image" alt="Immagine del piatto">
            <div>
              <h4>{{ plate.name }}</h4>
              <h5>{{ plate.price }} €</h5>
              <p>{{ plate.description }}</p>
              <p>Ingredienti: {{ plate.ingredients }}</p>
            </div>
          </div>
          <button @click="addToCart(plate, 1)">Aggiungi al carrello</button>
        </div>
      </div>
    </div>
  </template>

<style lang="scss" scoped>
@import "../assets/scss/partials/variables.scss";


.my-container{
    margin-top: 150px;


    .section-restourant-detail
    {
        background: $tertiary;
        
        
        .restourant-detail
        {
            width: 80%;
            margin: 0 auto;

            .row
            {
                justify-content: space-evenly;

                .info-restaurant{
                    background-color: $primary;
                    color: $secondary;
                    border-radius: 10px;
                }
                
                img {
                    width: 300px;
                    height: 300px;
                }
            }
        

        }
    }



    // STILE CARD MENU 

    .section-menu
    {
        text-align: center;


        .card-plate-row
        {
            flex-direction: column;
            align-content: center;


            .card-plate
            {
                display: flex;
                justify-content: center;
                width: 70%;
                border-radius: 20px;
                background-color: $primary;
                color: $secondary;
                border-radius: 30px;
                

                .img-card-plate
                {
                    img
                    {
                        width: 15rem;
                        border-radius: 130px;
                        box-shadow: 3px 3px 10px;
                    }
                }

                
                .card-plate-content
                {
                    flex-grow: 1;
                    padding: 1rem;




                    
                    .card-plate-description-ingredients
                    {
                        font-size: 1.1rem;


                        .card-plate-ingredients
                        {

                            .ingredienti
                            {
                                font-weight: 700;
                            }
                        }
                    }
                }

                .fa-solid
                {
                    padding: 1rem;
                }

                .card-plate-add
                {
                    padding: 1rem;
                    align-self: flex-end;
                    border: 2px solid $secondary;
                    border-radius: 2rem;
                    color: $secondary;

                }

            }
        }
    }
}

</style>