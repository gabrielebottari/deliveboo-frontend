<script>
export default {
  data() {
    return {
      cards: [
        {
            title: "I miei Piatti",
            img: "fa-solid fa-utensils",
            link: "",

        },
        {
            title: "I miei ordini",
            img: "fa-regular fa-rectangle-list",
            link: "",
        },
        {
            title: "Le mie statistiche",
            img: "fa-solid fa-chart-line",
            link: "",
        },
      ],
    };
  },
};
</script>

<template>
    <main class="debug">

                    <!-- cards created using a for cicle -->

        <div class="container">
            <div class="row">
                <div class="col cards" v-for="card in cards">
                    <a href="">
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
    </main>
</template>

<style lang="scss">

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
                background: linear-gradient(0deg, #00d7ff, white);
                box-shadow: 5px 5px 3px rgba(0, 0, 0, 0.3);

                .card-img-bg 
                {
                    width: 70%;
                    margin: 20px auto;
                    background: linear-gradient(0deg, white, #00d7ff);
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
                transition-duration: 0.3s;
                background: linear-gradient(0deg, white, #00d7ff);

            }
        }     
    }
}



/* DEBUG */

main.debug 
{
    height: 800px;
}

</style>
