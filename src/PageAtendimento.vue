<template>
  <div class="hello">
    <div class="container">
      <div class="row">
        <div class="col-md-7">
          <div class="col-md-9 rounded px-5 py-4 shadow bg-white text-left">
            <h1>Sobre o atendimento</h1>
            <h2>Dados do atendimento</h2>
            <div id="header"></div>
            <form id="atendimento" @submit="checkForm" action="#" method="post">
              <!--
  <p v-if="errors.length">
    <b>Por favor, corrija o(s) seguinte(s) erro(s):</b>
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
  </p> -->
              <p>
                <label class="form-label" for="name">Especialidade principal* </label>
                <br />

                <select v-model="selected" class="form-select">
                  <option disabled value="">Escolha um item</option>
                  <option>Cardiologia</option>
                  <option>Dermatologia</option>
                  <option>Neurologia</option>
                  <option>Oftalmologia</option>
                  <option>Psiquiatria</option>
                  <option>Urologia</option>
                </select>
                <br />
              </p>

              <p>
         
                <label for="preco">Informe o preço da consulta* </label><br />
                     
                                     <div class="input-group has-validation">
 <span class="input-group-text" id="inputGroupPrepend">R$</span>
      <input 
                  v-model="valor"
                  v-mask="'###,##'"
                  name="valor"
                  min="9"
                  max="9"
                  placeholder=" 00,00"
                  type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required>
</div>
                
              </p>

              <p>
                <label for="Pag">Forma de Pagamento* </label><br />

                Pix:
                <input
                  type="checkbox"
                  v-model="toggle"
                  true-value="sim"
                  false-value="não"
                /><br />
                Em dinheiro:
                <input
                  type="checkbox"
                  v-model="toggle"
                  true-value="sim"
                  false-value="não"
                />
                <br />
                Cartão de crédito:
                <input
                  type="checkbox"
                  v-model="toggle"
                  true-value="sim"
                  false-value="não"
                /><br />
              </p>
              <p>
                <router-link to="revisao"
                  ><ElementButton /></router-link>   
         </p>
         
            </form>
             
          </div>
        </div>

        <div class="vue-bg col-md-5 d-flex align-items-center">
          <img alt="Imagem" src="./assets/desktop-pagina-2.png" />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import VueMask from "v-mask";
import ElementButton from "./components/ElementButton.vue";
export default {
  components: { ElementButton, VueMask },
  name: "PageAtendimento",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
