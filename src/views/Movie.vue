<template>
  <div class="movie-container">
    <AddMovie v-on:add-movie="addMovie" />
    <div v-if="favouritedMovies.length < 3">{{underRequiredAmountError}}</div>
    <div v-if="favouritedMovies.length === 15">{{overRequiredAmountError}}</div>

    <Movies v-bind:movies="favouritedMovies" v-on:del-movie="deleteMovie" />
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
      browseMovies: [],
      favouritedMovies: [],
      underRequiredAmountError:
        "Please add more movies. Currently under the required amount of 3",
      overRequiredAmountError:
        "Please delete some movies if you wish to add more movies. Currently at max limit of 15",
    };
  },

  methods: {
    browseMovie(moviesAPI) {
      for (let movie of moviesAPI) {
        const infoMovie = {
          title: movie.title,
          releaseDate: movie.release_date,
          userScore: movie.vote_average,
          overview: movie.overview,
        };
        this.browseMovies = [...this.browseMovies, infoMovie];
      }
      console.log(this.browseMovies);
    },

    addMovie(movie) {
      if (this.favouritedMovies.length < 15) {
        this.browseMovies = [];
        this.favouritedMovies = [...this.favouritedMovies, movie];
      }
    },
    deleteMovie(id) {
      this.favouritedMovies = this.favouritedMovies.filter(
        (movie, index) => id !== index
      );
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
