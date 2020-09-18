<template>
  <div>
    <AddMovie v-on:add-movie="addMovie" />
    <Movies v-bind:movies="movies" />
  </div>
</template>

<script>
import AddMovie from "../components/AddMovie";
import Movies from "../components/Movies";
export default {
  name: "Movie",
  components: {
    AddMovie,
    Movies,
  },
  data() {
    return {
      movies: [],
    };
  },

  methods: {
    addMovie(movie) {
      this.movies = [...this.movies, movie];
    },
  },
};
</script>

<style scoped></style>
