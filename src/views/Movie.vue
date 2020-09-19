<template>
  <div class="movie-container">
    <AddMovie v-on:add-movie="addMovie" />
    <Movies v-bind:movies="movies" v-on:del-movie="deleteMovie" />
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
    deleteMovie(id) {
      this.movies = this.movies.filter((movie, index) => id !== index);
    },
  },
};
</script>

<style scoped>
.movie-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>
