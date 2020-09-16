<template>
  <div>
    <v-form @submit="checkMovie">
      <v-container>
        <v-col>
          <v-text-field
            v-model="movieTitle"
            label="Enter Movie Title"
          ></v-text-field>
          <p v-if="movieTitleError">{{ movieTitleError }}</p>
        </v-col>
        <v-col>
          <v-btn class="mr-4" type="submit">submit</v-btn>
        </v-col>
      </v-container>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "AddMovie",
  data: () => ({
    movieTitle: "",
    movieTitleError: "",
  }),
  methods: {
    checkMovie(e) {
      this.movieTitleError = "";

      if (this.movieTitle) {
        console.log("a");
      } else {
        this.movieTitleError = "Movie Title cannot be empty";
      }
      e.preventDefault();
    },
  },
};
</script>

<style scoped></style>
