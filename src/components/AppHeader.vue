<script>
export default {
    data() {
        return {

        };
    },
    methods: {

    }
}
</script>

<template>
    <!--Container dell'header-->
    <div class="container-fluid bg-danger text-center classe">
        <div class="row p-3">
            
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <!--Parte sinistra dell'header-->
                    <a class="navbar-brand logo-container" href="#">
                        <img src="/src/assets/img/deliveboo.png" class="rounded-circle" alt="">
                    </a>
                    <!--Parte destra dell'header-->

                    <!--toggle responsive: da decidere l'estetica, per poi correggerlo-->
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon bg-white"></span>
                    </button>

                    <!--vari bottoni con i link: decidere se va bene, per poi correggere-->
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ms-auto">
                            <!--Link delle varie pagine-->
                            <div class="btn-group btn-group-lg" role="group" aria-label="Large button group">
                                <button type="button" class="btn btn-primary me-4">Left</button>
                                <button type="button" class="btn btn-primary me-4">Middle</button>
                                <button type="button" class="btn btn-primary me-4">Right</button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    </div>
</template>

<style lang="scss" scoped>
    .logo-container > img {
        height: 50px;
        width: 150px;
    }
</style>