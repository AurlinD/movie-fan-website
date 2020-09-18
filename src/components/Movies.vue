<template>
  <div>
    Movies
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

<style scoped></style>
