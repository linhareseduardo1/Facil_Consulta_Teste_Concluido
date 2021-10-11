<template>
  <div>
    <button class="btn button">Próxima Página{{ btntext }}</button>
  </div>
</template>

<script>
export default {
  name: "ElementButton",
  props: ["btntext"],
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap");

.button {
  font-family: "Confortaa";
}
</style>