<template>
  <div>
    MovieItem

    <div class="container"></div>
    <h2>{{ movie.title }}</h2>
    <p>{{ movie.releaseDate }}</p>
    <p>{{ movie.userScore }}</p>
    <p>{{ movie.overview }}</p>
  </div>
</template>

<script>
export default {
  name: "MovieItem",
  props: ["movie"],
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
}
</style>
