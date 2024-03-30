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
    <div class="container-fluid text-center header-container">
        <div class="row p-3">
            
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <!--Parte sinistra dell'header-->
                    <a class="navbar-brand logo-container" href="#">
                        <img src="/src/assets/img/deliveboo.png" class="rounded-circle" alt="">
                    </a>
                    <!--Parte destra dell'header-->

                    <!--toggle responsive: da decidere l'estetica, per poi correggerlo-->
                    <!--<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon p-3"></span>
                    </button>
                    -->

                    <!--Offcanvas-->
                    <div>
                        offcanvas
                    </div>
                    <!--vari bottoni con i link: decidere se va bene, per poi correggere-->
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ms-auto">
                            <!--Link delle varie pagine-->
                               
                            <div class="dropdown">
                                <button class="btn dropdown-toggle me-4 px-4 py-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Entra nel nostro team!
                                </button>
                                <ul class="dropdown-menu px-5 py-2">
                                    <li><a class="dropdown-item me-4 px-4 py-2 text-center" href="#">Deliveboo</a></li>
                                    <li><a class="dropdown-item me-4 px-4 py-2 text-center" href="#">Consegne</a></li>
                                    <li><a class="dropdown-item me-4 px-4 py-2 text-center" href="#">Partner</a></li>
                                </ul>
                            </div>
                            <button type="button" class="btn me-4 px-4 py-2">Login</button>
                            <button type="button" class="btn me-4 px-4 py-2">Account</button>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import "../assets/scss/partials/header.scss";
    .offcanvas {
        background-color: #39526A;
        max-width: 200px;
    }
    .offcanvas-hidden {
    display: none;
}

.offcanvas-body-hidden {
    visibility: hidden;
}

</style>