<script>

export default {

  data() {
    return {
      dishes: [
          {
              name: "pollo al curry",
              quantity: 1,
              img: "",
              price: "10,00 €"
          },
          {
              name: "polenta e funghi",
              quantity: 3,
              img: "",
              price: "9,00 €"
  
          },
          {
              name: "Carbonara",
              quantity: 5,
              img: "",
              price: "8,00 €"
  
          },
          {
              name: "Cesar salad",
              quantity: 4,
              img: "",
              price: "7,00 €"
          },
          ],
        };
  },
};
</script>

<template>
    <div class="container p-4">
        <div class="row">
            <div class="col-8">
                <small class="text-muted">Full name as displayed</small>
                <h4>
                    Indirizzo di pagamento
                </h4>
                <div class="row">
                    <div class="col-6 my-2">
                        <label for="firstname" class="my-2">Nome</label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="col-6 my-2">
                        <label for="firstname" class="my-2">Cognome</label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="col-12 my-2">
                        <label for="" class="my-2">Email</label>
                        <div class="input-group">
                            <span class="input-group-text">
                                @
                            </span>
                            <input type="text" class="form-control" id="username">
                        </div>
                    </div>
                    <div class="col-12 my-2">
                        <label for="lastname" class="form-label">Dettagli dell'ordine</label>
                        <input type="text" id="lastname" class="form-control text-muted" placeholder="Es: Campanello rotto, chiamare al telefono, ecc. ecc.">
                    </div>
                    <div class="col-12 text-center my-2 p-2">
                        <label for="lastname" class="form-label"></label>
                        <select name="form-control" id="fork" class="p-2">
                            <option>Con posate</option>
                            <option>Senza posate</option>
                        </select>
                    </div>
                    
                </div>
                <hr>
                <h4>
                    Pagamenti
                </h4>
                <div class="form-check m-2">
                    <input type="radio" class="form-check-input" name="" id="">
                    <label class="form-check-label">Consegna standard</label>
                </div>
                <div class="form-check m-2">
                    <input type="radio" class="form-check-input" name="" id="">
                    <label class="form-check-label">Consegna Premium</label>
                </div>
                <div class="row">
                    <div class="col-12 my-3">
                        <label for="cardname" class="form-label">Numero carta</label>
                        <input type="text" id="cardname" class="form-control">
                    </div>
                    <div class="col-5">
                        <label for="creditcard" class="form-label">Nome titolare</label>
                        <input type="text" id="creditcard" class="form-control">
                    </div>
                    <div class="col-4">
                        <label for="sxpiration" class="form-label">Data scadenza</label>
                        <input type="text" id="creditcard" class="form-control">
                    </div>
                    <div class="col-3">
                        <label for="creditcard" class="form-label">cvv</label>
                        <input type="text" id="creditcard" class="form-control">
                    </div>
                </div>
                <hr>
                <button type="submit" class="btn btn-primary btn-block">
                    Continua al checkout
                </button>
            </div>
            <div class="col-4">
                <span class="d-flex justify-content-between align-item-center my-2">
                    <h4 class="bold">
                        Carrello
                    </h4>
                    <span class="badge bg-secondary rounded-pill my-2 p-2">
                        4
                    </span>
                </span>
                <ul class="list-group">
                    <li class="list-group-item d-flex justify-content-between">
                        <div>
                            <h4>
                                Nome Prodotto
                            </h4>
                            <span class="">
                                Descrizione
                            </span>
                        </div>
                        <span class="text-muted">
                            
                        </span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between">
                        <div>500
                            <h4>
                                Nome Prodotto
                            </h4>
                            <span class="">
                                Descrizione
                            </span>
                        </div>
                        <span class="text-muted">
                            500
                        </span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between">
                        <div>
                            <h4>
                                Nome Prodotto
                            </h4>
                            <span class="">
                                Descrizione
                            </span>
                        </div>
                        <span class="text-muted">
                            500
                        </span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between">
                        <div>
                            <h4 class="text-success">
                                Nome Prodotto
                            </h4>
                            <span class="">
                                Descrizione
                            </span>
                        </div>
                        <span class="text-muted">
                            500
                        </span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between">
                        <div>
                            <span class="">
                                Totale
                            </span>
                        </div>
                        <span>
                            1000
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import "../assets/scss/partials/carrello.scss";
    .container{
        background-color: #39526A;
        color: #F7CD1F;
    }
</style>