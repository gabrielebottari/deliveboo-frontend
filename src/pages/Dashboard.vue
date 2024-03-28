<script>
export default {
  data() {
    return {
      cards: [
        {
          title: "Il Mio Menù",
          img:
            "https://media.istockphoto.com/id/96430985/it/foto/pancake.jpg?s=2048x2048&w=is&k=20&c=27bCjgpBLWif3mvJzRuHQOugikYP6xb34mzVvRIp00o=",
          link: "",
        },
        {
          title: "Il Mio Menù",
          img:
            "https://media.istockphoto.com/id/96430985/it/foto/pancake.jpg?s=2048x2048&w=is&k=20&c=27bCjgpBLWif3mvJzRuHQOugikYP6xb34mzVvRIp00o=",
          link: "",
        },
        {
          title: "Il Mio Menù",
          img:
            "https://media.istockphoto.com/id/96430985/it/foto/pancake.jpg?s=2048x2048&w=is&k=20&c=27bCjgpBLWif3mvJzRuHQOugikYP6xb34mzVvRIp00o=",
          link: "",
        },
      ],
    };
  },
};
</script>

<template>
    <main>

                    <!-- cards created using a for cicle -->

        <div class="container">
            <div class="row">
                <div class="col cards" v-for="card in cards">
                    <div class="my-card">
                        <div class="card-img-bg">
                            <img :src=card.img alt="">
                        </div>
                        <div class="card-content">and i'm the text of this card</div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss">

.row * {
    padding: 0;
}

main {
  background: linear-gradient(45deg, #fffb00, #12c600);
  opacity: 0.8;

    .container {
        max-width: 60%;
        padding-top: 50px;
        padding-bottom: 50px;

        .cards {

            
            .my-card {

                display: flex;
                flex-direction: column;
                transition: 0.5s;

                width: 90%;

                border-radius: 10px;
                background: lightgrey;
                box-shadow: 5px 5px 3px rgba(0, 0, 0, 0.75);
                
                
                .card-img-bg {
                    background: darkgrey;


                    img {
                        position: relative;
                        top: 0;
                        height: 100%;
                        width: 100%;
                        object-fit: fill;
                    }
                }
            }
        }     
    }
}

</style>
