<template>
  <div class="movie-container">
    <AddMovie v-on:add-movie="addMovie" />
    <div v-if="movies.length < 3">{{underRequiredAmountError}}</div>
    <div v-if="movies.length === 15">{{overRequiredAmountError}}</div>
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
      underRequiredAmountError:
        "Please add more movies. Currently under the required amount of 3",
      overRequiredAmountError:
        "Please delete some movies if you wish to add more movies. Currently at max limit of 15",
    };
  },

  methods: {
    addMovie(movie) {
      if (this.movies.length < 15) {
        this.movies = [...this.movies, movie];
      }
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
