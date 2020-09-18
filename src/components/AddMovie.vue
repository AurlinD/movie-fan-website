<template>
  <div>
    <v-form @submit="checkIfEmpty">
      <v-container>
        <v-col>
          <v-text-field
            v-model="movieTitle"
            label="Enter Movie Title"
          ></v-text-field>
          <div v-if="movieTitleErrors.length">
            <p v-bind:key="error" v-for="error in movieTitleErrors">
              {{ error }}
            </p>
          </div>
        </v-col>
        <v-col>
          <v-btn class="mr-4" type="submit">Search Movie</v-btn>
        </v-col>
        {{ result }}
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
    result: [],
  }),
  methods: {
    checkIfEmpty(e) {
      this.movieTitleErrors = [];

      if (this.movieTitle) {
        this.addMovie();
      } else {
        this.movieTitleErrors.push("Movie Title cannot be empty");
      }
      e.preventDefault();
    },
    addMovie() {
      const API_KEY = "ea9385095138c0c18e3aca7590507b54";
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${this.movieTitle}`
        )
        .then((res) => {
          this.result = [...this.result, res.data];
          if (res.data.total_results === 0) {
            this.movieTitleErrors.push("Can’t find that Movie");
          }
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped></style>
