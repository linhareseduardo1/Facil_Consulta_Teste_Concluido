<template>
  <div class="hello">
    <div class="container">
      <div class="row">
        <div class="col-md-7">
          <div class="col-md-9 rounded px-5 py-4 shadow bg-white text-left">
            <h1>Parabéns!</h1>
            <h2>Seu cadastro foi concluído com sucesso!!</h2>
            <div id="header"></div>
          </div>
        </div>
        <div class="col-md-5">
          <div class="col-md-9 rounded px-5 py-4 shadow bg-white text-left">
            <h2>
              Esta aplicação foi construída em Vue JS para fins de testes.
              Espero que tenha gostado!
            </h2>
            <div id="header"></div>
          </div>
        </div>

        <div class="vue-bg col-md-5 d-flex align-items-center">
          <img alt="Vue logo" src="../assets/firework.png"  />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Conclusao",
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
