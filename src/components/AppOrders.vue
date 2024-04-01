<script>
export default {
    data() {
        return {
            orders: [
                {
                    NomeCliente: "Nome Cliente",
                    Totale: "0,00",
                    PiattiScelti: "Elenco piatti dell'ordine",
                    Data: "Data dell'ordine",
                    Orario: "Orario dell'ordine",
                }
            ]
        }
    },
}
</script>
<template>
    <section class="orders">

        <div class="row">

            <!-- Nome cliente -->
            <div class="col">
                <h5>Nome cliente</h5>
            </div>

            <!-- Elenco piatti ordine -->
            <div class="col">
                <h5>Elenco piatti ordine</h5>
            </div>

            <!-- Data ordine -->
            <div class="col">
                <h5>Data ordine</h5>
            </div>

            <!-- Orario ordine -->
            <div class="col">
                <h5>Orario ordine</h5>
            </div>

            <!-- Totale ordine  -->
            <div class="col">
                <h5>Totale ordine</h5>
            </div>
        </div>

        <div class="div" v-for="order in orders">
            <div class="row">

                <!-- Nome cliente -->
                <div class="col">
                    {{ order.NomeCliente }}
                </div>

                <!-- Elenco piatti ordine -->
                <div class="col">
                    {{ order.PiattiScelti }}
                </div>

                <!-- Data ordine -->
                <div class="col">
                    {{ order.Data }}
                </div>

                <!-- Orario ordine -->
                <div class="col">
                    {{ order.Orario }}
                </div>

                <!-- Totale ordine  -->
                <div class="col">
                    {{ order.Totale }} €
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>

.orders
{

    .row
    {
        width: 100%;
        border-bottom: 1px solid grey;
        padding: 10px;
    }
}

</style>