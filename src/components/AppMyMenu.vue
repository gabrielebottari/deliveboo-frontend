<script>
export default {
    data() {
        return {
            menu: [
                {
                    nome: "",
                    img: "",
                    categoria: "",
                    prezzo: "",

                }
            ]
        }
    },
}

</script>
<template>
    <section>
        <div class="container">
            <div class="menu" v-for="dish in menu">
                <!-- singola riga del menu -->
                <div class="row m-2">

                    <!-- foto piatto -->
                    <div class="col">
                        <img src="" alt="foto piatto">
                    </div>

                    <!-- nome piatto -->
                    <div class="col">
                        nome piatto
                    </div>

                    <!-- categoria piatto -->
                    <div class="col">
                        categoria piatto
                    </div>

                    <!-- prezzo piatto -->
                    <div class="col">
                        prezzo piatto
                    </div>

                    <div class="col menu-buttons">
                        <!-- bottone modifica -->
                        <button>Modifica</button>
                        
                        <!-- bottone Cancella -->
                        <button>Cancella</button>
                    </div>
                </div>
            </div>
            <button class="new-dish-btn">
                Aggiungi un nuovo piatto
            </button>
        </div>
    </section>
</template>

<style lang="scss" scoped>

.menu-buttons 
{
    button
    {
        padding: 5px;
        margin: 0 5px;
    }
}

.new-dish-btn
{
    margin: 0 auto;
}
</style>