<template>
  <div class="container">
    <div class="title" v-if="flag === 'true'">
      Favourited movies
      <hr />
    </div>
    <div class="title" v-else>
      Searched movies, choose your favourite movie
      <hr />
    </div>

    <div class="movies">
      <div v-bind:key="i" v-for="(movie, i) in movies">
        <MovieItem
          v-bind:movie="movie"
          v-on:function-movie="$emit('function-movie', i)"
          :flag="flag"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MovieItem from "./MovieItem";
export default {
  name: "Movies",
  components: { MovieItem },
  props: ["movies", "flag"],
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.title {
  width: 100%;
  text-align: center;
}

.movies {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>
