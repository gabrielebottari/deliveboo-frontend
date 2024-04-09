<script>
import axios from 'axios';

export default {
  name: 'PaymentComponent',
  data() {
    return {
      dropinInstance: null,
    };
  },
  mounted() {
    this.setupBraintree();
  },
  methods: {
    setupBraintree() {
      // Sostituisci 'yourTokenizationKey' con la tua chiave di tokenizzazione pubblica da Braintree
      braintree.dropin.create({
        authorization: 'sandbox_g42y39zw_348pk9cgf3bgyw2b',
        selector: '#dropin-container',
      }, (error, dropinInstance) => {
        if (error) {
          console.error('Drop-in Error:', error);
          return;
        }
        this.dropinInstance = dropinInstance;
      });
    },
    submitPayment() {
      if (!this.dropinInstance) {
        console.error('Drop-in UI non inizializzata.');
        return;
      }
      
      this.dropinInstance.requestPaymentMethod((error, payload) => {
        if (error) {
          console.error('Errore nella richiesta del metodo di pagamento:', error);
          return;
        }
        // Qui puoi inviare `payload.nonce` al tuo server
        // In questo esempio, stamperemo solo il nonce nella console
        console.log('Nonce del pagamento:', payload.nonce);
      });
    },
  },
};
</script>

<template>
    <div id="dropin-container" class="px-5 pt-5 mt-5"></div>
    <button id="submit-button" class="button button--small button--green m-5" @click="submitPayment">Purchase</button>
</template>

<style lang="scss" scoped>
    @import "../assets/scss/partials/checkout.scss";
.button {
  cursor: pointer;
  font-weight: 500;
  left: 3px;
  line-height: inherit;
  position: relative;
  text-decoration: none;
  text-align: center;
  border-style: solid;
  border-width: 1px;
  border-radius: 3px;
  //-webkit-appearance: none;
  //-moz-appearance: none;
  display: inline-block;
}

.button--small {
  padding: 10px 20px;
  font-size: 0.875rem;
}

.button--green {
  outline: none;
  background-color: #64d18a;
  border-color: #64d18a;
  color: white;
  transition: all 200ms ease;
}

.button--green:hover {
  background-color: #8bdda8;
  color: white;
}
</style>