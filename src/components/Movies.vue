<template>
  <div class="container">
    <div v-bind:key="movie" v-for="movie in movies">
      <MovieItem v-bind:movie="movie" />
    </div>
  </div>
</template>

<script>
import MovieItem from "./MovieItem";
export default {
  name: "Movies",
  components: { MovieItem },
  props: ["movies"],
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 8px;
}
</style>
