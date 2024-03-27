<script>
export default {
    data() {
        return {
            cards:[
                {
                    title: 'Il Mio Menù',
                    img:'https://media.istockphoto.com/id/96430985/it/foto/pancake.jpg?s=2048x2048&w=is&k=20&c=27bCjgpBLWif3mvJzRuHQOugikYP6xb34mzVvRIp00o='
                },
                {
                    title: 'Il Mio Menù',
                    img:'https://media.istockphoto.com/id/96430985/it/foto/pancake.jpg?s=2048x2048&w=is&k=20&c=27bCjgpBLWif3mvJzRuHQOugikYP6xb34mzVvRIp00o='
                },
                {
                    title: 'Il Mio Menù',
                    img:'https://media.istockphoto.com/id/96430985/it/foto/pancake.jpg?s=2048x2048&w=is&k=20&c=27bCjgpBLWif3mvJzRuHQOugikYP6xb34mzVvRIp00o='
                },
            ]
        }
    },
}
</script>


<template>


    <div class="container">
        <div class="row">
            <div class="col">
                <div class="cards" v-for="card in cards">
                    <div class="card m-5">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img :src=card.img class="img-fluid rounded-start" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">{{ card.title }}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>
