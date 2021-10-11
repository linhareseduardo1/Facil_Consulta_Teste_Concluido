<template>
  <div class="hello">
    <div class="container">
      <div class="row">
        <div class="col-md-7">
          <div class="col-md-9 rounded px-5 py-4 shadow bg-white text-left">
            <h1>Revisão do cadastro</h1>
            <div id="header"></div>
            <PageHome :form="form" />

            <form id="formulario" @submit="checkForm" action="#" method="post">
              <!--
  <p v-if="errors.length">
    <b>Por favor, corrija o(s) seguinte(s) erro(s):</b>
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
  </p> -->
              <p>
                <label for="name">Nome completo: </label>
                <span>
                  {{ form.name }}
                </span>

                <br />
                <!--            <li v-for="todo in todos" :key="todo.name">
                  {{ todo.name }}
                </li>
                <span> {{ todo.name }}</span>-->
              </p>

              <p>
                <label for="age">CPF </label><br />
                <span> {{ form.cpf }}</span>
              </p>

              <p>
                <label for="age">Número de celular </label><br />
                <span> {{ form.phone }}</span>
              </p>

              <p>
                <label for="estado">Estado/Cidade </label><br />
                <span> {{ estado }}</span>
                <span> {{ cidade }}</span>
              </p>
              <p>
                <label for="especialidade">Especialidade Principal </label
                ><br />
                <span> {{ especialidade }}</span>
              </p>

              <p>
                <label for="preco"> Preço da consulta </label><br />
                <span> {{ preco }}</span>
              </p>

              <p>
                <label for="pag"> Forma de pagamento da consulta </label><br />
                <span> {{ pag }}</span>
              </p>

              <p>
                <ElementButton :btntext="text" />
              </p>
            </form>
          </div>
        </div>
        <div class="vue-bg col-md-4 d-flex align-items-center">
          <img alt="Vue logo" src="./assets/desktop-pagina-3.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageHome from "./components/PageHome";
export default {
  components: {
    PageHome,
  },
  data() {
    return {
      form: {
        name: "John Doe",
        phone: " : 00 00000 0000",
        cpf: " : 000.000.000-00",
      },
    };
  },
};
</script>

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
