<template>
  <div class="hello">
    <div class="container">
      <div class="row">
        <div class="col-md-7">
          <div class="col-md-9 rounded px-5 py-4 shadow bg-white text-left">
            <h1>Sobre o profissional</h1>
            <h2>Dados do profissional</h2>
            <div id="header"></div>
            <form id="formulario" method="post">
              <p>
                <label for="name">Nome completo* : </label>
                <br />

                <input
                  v-model="formulario_name"
                  type="text"
                  name="formulario_name"
                  placeholder="Digite o nome completo"
                />
              </p>

              <p>
                <label for="age">CPF* </label><br />
                <input
                  v-model="formulario_cpf"
                  type="text"
                  name="formulario_cpf"
                  min="9"
                  max="9"
                  placeholder="Digite um CPF"
                />
              </p>

              <p>
                <label for="tel">Número de celular* </label><br />
                <input
                  v-model="formulario_phone"
                  type="text"
                  min="9"
                  max="9"
                  placeholder="(00) 0 0000-0000"
                />
              </p>
              <p>
                <label for="estado">Estado* </label><br />
                <select id="estado" v-model="estado" name="estado[]">
                  <option>Paraná</option>
                  <option>Rio Grande do Sul</option>
                  <option>Santa Catarina</option>
                </select>
              </p>
              <p>
                <label for="cidade">Cidade* </label><br />
                <select id="cidade" v-model="cidade" name="cidade[]">
                  <option>Londrina(PR)</option>
                  <option>Maringá(PR)</option>
                  <option>Pelotas(RS)</option>
                  <option>Porto Alegre(RS)</option>
                  <option>Florianópolis(SC)</option>
                  <option>Joinville (RS-)</option>
                </select>
              </p>
              <p>
                <router-link to="atendimento"> <ElementButton /> </router-link>
              </p>
              <!--      <PageRevisao> @CustomEventInputChanged="doSomenthing"> </PageRevisao>-->
            </form>
          </div>
        </div>
        <div class="vue-bg col-md-4 d-flex align-items-center">
          <img alt="Vue logo" src="../assets/desktop-pagina-1.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ElementButton from "./ElementButton.vue";
import VueMask from "v-mask";
import PageRevisao from "../PageRevisao.vue";

export default {
  name: "PageHome",
  components: { ElementButton, VueMask },
  data() {
    return {
      props: ["form"],

     form: Object.assign({}, this.form),
      formulario: {
        checked: false,
        formulario_name: "Outrapessoa",
        formulario_cpf: "0",
        formulario_phone: "0",
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
$primary-0: #483698;

h1 {
  color: $primary-0;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
</style>


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
a {
  color: #42b983;
}
</style>
