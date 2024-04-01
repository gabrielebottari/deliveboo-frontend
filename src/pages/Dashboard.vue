<script>

// importazione componenti 
import AppMyMenu from '../components/AppMyMenu.vue';
import AppOrders from '../components/AppOrders.vue';
import AppStatistics from '../components/AppStatistics.vue';
import AppSingleDish from '../components/AppSingleDish.vue';

export default {
    data() {
        return {
        cards: [
            {
                title: "I miei Piatti",
                img: "fa-solid fa-utensils",
                component: "AppMyMenu",

            },
            {
                title: "I miei ordini",
                img: "fa-regular fa-rectangle-list",
                component: "AppOrders",
            },
            {
                title: "Le mie statistiche",
                img: "fa-solid fa-chart-line",
                component: "AppStatistics",
            },
        ],
        };
    },
    components: {
        AppMyMenu,
        AppOrders,
        AppSingleDish,
        AppStatistics,
    },
    methods: {
        GetCardContent: function (component) {
            // prendi l'elemento e sposto nella lista carrello
        }
    }
};
</script>

<template>
    <main class="debug">

                    <!-- cards created using a for cicle -->

        <div class="container">
            <div class="row">
                <div class="col cards" v-for="card in cards">
                    <a>
                        <div class="my-card">
                            <div class="card-img-bg">
                                <div>
                                    <i :class="card.img" class="fontawesome-icon"></i>
                                </div>
                            </div>
                            <div class="card-content">
                                <h3>{{ card.title }}</h3>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div class="active">
            <div class="card-link-content">
                <!-- <AppMyMenu/> -->
                <AppOrders/>
                <!-- <AppMyMenu/> -->
                <!-- <AppMyMenu/> -->
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>

.row * 
{
    padding: 0;
}

main 
{
  background: linear-gradient(45deg, #ffff23, #12a600);


    .container 
    {
        max-width: 60%;
        padding-top: 50px;
        padding-bottom: 50px;

        .cards 
        {
            
            a
            {
                text-decoration: none;
                color: black;
            }

            .my-card 
            {
                border-radius: 10px;
                width: 90%;
                display: flex;
                justify-content: center;
                flex-direction: column;
                background: linear-gradient(0deg, #37eee0, white);
                box-shadow: 5px 5px 3px rgba(0, 0, 0, 0.3);

                .card-img-bg 
                {
                    width: 70%;
                    margin: 20px auto;
                    background: linear-gradient(0deg, white, #37eee0);
                    text-align: center;
                    border-radius: 10px;


                    .fontawesome-icon
                    {
                        width: 100px;
                        height: 100px;
                        line-height: 100px;
                        font-size: 50px;
                        color: #12a600;
                        vertical-align: middle;
                        border: 3px solid black;
                        border-radius: 60%;
                        margin: 30px;
                    }
                }

                .card-content
                {
                    margin-top: 20px;
                    margin-bottom: 20px;
                    text-align: center;
                    transition: 2s;
                }

            }

            .my-card:hover
            {
                transform: scale(1.05);
                background: linear-gradient(0deg, white, #37eee0);
                transition-duration: 0.5s;
            }
        }     
    }
}

/* DEBUG */

main.debug 
{
    height: 800px;
}

.hidden
{
    display: none;
}

.active
{
    display: block;
    position: fixed;
    left: 0%;
    bottom: 0%;
    width: 100vw;
    height: 100vh;
    background: rgba($color: #000000, $alpha: 0.3);
    display: flex;
    justify-content: center;
    align-items: center;

    .card-link-content
    {
        width: 70%;
        height: 70%;
        background-color: white;
        border-radius: 20px;

    }

}

</style>
