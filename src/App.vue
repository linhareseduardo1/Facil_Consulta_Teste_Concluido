<template>
  <div id="app" class="">
    <br />

    <router-view></router-view>
  </div>
</template>

<script>
import ElementButton from "./components/ElementButton.vue";

export default {
  name: "App",
  data() {
    return {
      text: "Página de Atendimentos",
    };
  },
  components: {
    ElementButton,
  },

};
</script>


<style lang="scss">
$primary-0: #483698;
$secondary-0: #ffffff;
$secondary-1: #f9f9f9;
$secondary-3: #b9b9b9;
$secondary-4: #8a8a8a;
$secondary-7: #282828;
$cta-1: #ffe766;
$cta-0: #fbde40;
$danger: #dc3545; //
$transparent: none;

@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400&display=swap");

.row {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.button {
  font-family: "Confortaa";
  color: $secondary-0;
  background-color: $primary-0;
}
.button:active,
.button:hover {
  color: $secondary-0;
}
h1,
h1.bold {
  color: $primary-0;
  font-family: "Comfortaa", cursive;
}
body,
label,
h2,
h3,
h4 {
  font-family: "Open Sans";
}
</style>

<style>
#app {
  font-family: "Confortaa";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}

.raised-block {
  background-color: #fff;
  margin-bottom: 10px;
  margin-left: 0;
  margin-right: -0.625rem;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
}
@media (max-width: 33.9em) {
  .raised-block {
    margin-left: -0.625rem;
  }
}
.row [class^="col-"]:first-child > .raised-block {
  margin-left: -0.625rem;
}
*,
*:after,
*:before {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

img {
  margin: 1 em;
  width: auto;
  max-width: 100%;
  height: auto !important;
}
</style>
