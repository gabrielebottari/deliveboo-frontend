<script>
export default {

data() {
  return {
  counter: 0,
  piatti: [{
      nome: "Carbonara",
      descrizione: "Pasta con le uova e guanciale, aggiunta pepe nero",
      prezzo: "£15"
              },
              {
      nome: "Amatriciana",
      descrizione: "Pasta sugo",
      prezzo: "£20"
              },
              {
      nome: "Crudo di pesce",
      descrizione: "Pesce crudo",
      prezzo: "£25"
              },
              {
      nome: "Tagliata di manzo",
      descrizione: "Tagliata di manzo",
      prezzo: "£35"
              },
          ],
          indicePiattoCorrente: 0
      };
},
methods: {
  //metti metodi
  add() {
      const piattoCorrente = this.piatti[this.indicePiattoCorrente];
    
      /*
          LI
      */
      const newLi = document.createElement('li');
      newLi.classList.add('plates-list-item');
      newLi.classList.add('m-4');

      /*
          DIV CONTENENTE NOME E PREZZO
      */
      const newDivNamePrice = document.createElement('div');
      newDivNamePrice.classList.add(
                                  'plates-name-price', 
                                  'd-flex',
                                  'justify-content-between'
                                   );

      newLi.appendChild(newDivNamePrice);

          /*
              I DUE SPAN
          */
          const h5Nome = document.createElement('h5');
          h5Nome.textContent = piattoCorrente.nome;

          const spanPrezzo = document.createElement('span');
          spanPrezzo.textContent = piattoCorrente.prezzo;

          newDivNamePrice.appendChild(h5Nome);
          newDivNamePrice.appendChild(spanPrezzo);

      /*
          DIV CON LA DESCRIZIONE
      */
      const newDivDescription = document.createElement('div');
      newDivDescription.classList.add(
                                      'plate-description',
                                      'm-2',
                                      'text-start'
                                  );

      newLi.appendChild(newDivDescription);

      const spanDescription = document.createElement('span');
      spanDescription.textContent = piattoCorrente.descrizione;
      newDivDescription.appendChild(spanDescription);

      /*
          BOTTONE REMOVE
      */
      const removeButton = document.createElement('button');
      removeButton.classList.add('px-3');
      removeButton.style.cssText  = 'background-color: rgba(245, 245, 245, 0.151); color: black;';
      removeButton.textContent = '-';
      removeButton.addEventListener('click', () => {
          newLi.remove();
          this.DecrementaNumeroPiatti()
      });
      newLi.appendChild(removeButton);

      document.getElementById("plates-list").appendChild(newLi);

  },
  AumentaNumeroPiatti(){
      this.counter++;
      document.getElementById("piatti-presenti").innerText = `${this.counter}.`;
  },
  DecrementaNumeroPiatti(){
      this.counter--;
  }
},
mounted() {
  axios
      .get('http://127.0.0.1:8000/api/restaurants')
      .then(res=>{
          this.restaurants=res.data.results.data;
          console.log(this.restaurants)
      });
},
};
</script>

<template>
    <!--FLOATING BUTTON-->
    <button class="btn-cart" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
        <i class="fa-solid fa-cart-shopping"></i>
      </button>
      
    <!--Carrello Temporaneo-->
    <div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
        <div class="offcanvas-header">
          <h3 class="offcanvas-title" id="staticBackdropLabel">CARRELLO</h3>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body" style="background-image: url(./src/assets/img/undraw_shopping_app_flsj.png); 
                                          background-size: contain;
                                          background-position: center;
                                          background-repeat: no-repeat;">
              
              <div class="justify-content-between d-flex my-5">
                <div class="container-list-group">
                  <ul id="plates-list" class="plates-list text-center">
                      <button @click="add(); AumentaNumeroPiatti()" class="add-btn px-3">
                          +
                      </button>
                  </ul>
                </div>
              </div>
              <button class="btn btn-primary text-white d-flex">
                vai al pagamento
              </button>
        </div>
    </div>
    <!--END FLOATING BUTTON-->
</template>

<style lang="scss">

</style>