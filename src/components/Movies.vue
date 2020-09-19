<template>
  <div class="container">
    <div v-bind:key="i" v-for="(movie, i) in movies">
      <MovieItem v-bind:movie="movie" v-on:del-movie="$emit('del-movie', i)" />
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
