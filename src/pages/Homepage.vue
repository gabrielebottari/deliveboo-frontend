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
    <!--Header che si ricollega all'header generale-->
    <header>
        <!--Container principale dell'header della homepage, che si ricollegherà all'header generale-->
        <div class="container-fluid homepage-header bg-primary">

            <h2>
                I migliori piatti che puoi trovare in circolazione
            </h2>
                    
            <!--ricerca per indirizzo-->
            
            <nav class="navbar bg-danger">
            <div class="container-fluid text-center">
                <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            </nav>

        </div>
        
    </header>
   
</template>

<style lang="scss" scoped>
    .homepage-header {
        height: 400px;
        padding: 50px 500px 50px 500px;
    }
    .homepage-header > h2 {
        margin-bottom: 100px;
        margin-left: 90px;
    }
</style>