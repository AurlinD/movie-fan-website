<template>
  <div class="add-movie-container">
    <v-form @submit="checkIfEmptySearchbar">
      <v-container>
        <v-col>
          <v-text-field v-model="movieTitle" label="Enter Movie Title Keyword"></v-text-field>
          <div class="error" v-if="movieTitleErrors.length">
            <p v-bind:key="error" v-for="error in movieTitleErrors">{{ error }}</p>
          </div>
        </v-col>
        <v-col>
          <v-btn class="mr-4" type="submit">Search Movie(s)</v-btn>
        </v-col>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AddMovie",
  data: () => ({
    movieTitle: "",
    movieTitleErrors: [],
  }),
  methods: {
    checkIfEmptySearchbar(e) {
      this.movieTitleErrors = [];

      if (this.movieTitle) {
        this.checkValidation();
      } else {
        this.movieTitleErrors.push("Movie Title cannot be empty");
      }
      e.preventDefault();
    },
    checkValidation() {
      const API_KEY = "ea9385095138c0c18e3aca7590507b54";
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${this.movieTitle}`
        )
        .then((res) => {
          if (res.data.total_results === 0) {
            this.movieTitleErrors.push("Can’t find that Movie");
          } else {
            const queriedMovies = res.data.results.filter(
              (movie, index) => index < 10
            );
            this.$emit("add-movie", queriedMovies);
          }
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

}
<style scoped>
.add-movie-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.error {
  color: red;
}

.v-btn {
  width: 100%;
}

.v-form {
  width: 100%;
}

.v-form label {
  text-align: center;
}
</style>
