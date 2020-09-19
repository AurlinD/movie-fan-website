<template>
  <div class="movie-container">
    <AddMovie v-on:add-movie="queriedMovies" />
    <div v-if="favouritedMovies.length < 3">{{underRequiredAmountError}}</div>
    <div v-if="favouritedMovies.length === 15">{{overRequiredAmountError}}</div>
    <Movies v-bind:movies="searchedMovies" v-on:function-movie="addMovie" flag="false" />
    <Movies v-bind:movies="favouritedMovies" v-on:function-movie="deleteMovie" flag="true" />
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
      searchedMovies: [],
      favouritedMovies: [],
      underRequiredAmountError:
        "Please add more movies. Currently under the required amount of 3",
      overRequiredAmountError:
        "Please delete some movies if you wish to add more movies. Currently at max limit of 15",
    };
  },

  methods: {
    queriedMovies(movies) {
      const movieArray = [];

      for (let movie of movies) {
        const infoMovie = {
          title: movie.title,
          releaseDate: movie.release_date,
          userScore: movie.vote_average,
          overview: movie.overview,
        };
        movieArray.push(infoMovie);
      }
      this.searchedMovies = movieArray;
      console.log(this.searchedMovies);
    },

    addMovie(id) {
      if (this.favouritedMovies.length < 15) {
        this.favouritedMovies = [
          ...this.favouritedMovies,
          this.searchedMovies[id],
        ];
        this.searchedMovies = [];
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
