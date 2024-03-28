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
                        <div class="card-img">
                            <div>i'm the img of this card</div>
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

        .cards {

            width: calc(90% / 3);
            
            
            border: 5px solid black;
            
            .my-card {
                background: lightgrey;
                height: 200px;
    
                .card-img {
                    background: darkgrey;
                }
            }
        }     
    }
}

</style>
