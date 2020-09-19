<template>
  <v-card class="mx-auto" v-bind:class="[color ? 'green' : 'red']" max-width="344" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="top-line">
          <v-list-item-title class="headline mb-1">{{movie.title}}</v-list-item-title>
          <v-btn @click="$emit('del-movie')" small class="ma-2">Delete</v-btn>
        </div>
        <v-list-item-subtitle>Release Date: {{movie.releaseDate}}</v-list-item-subtitle>
        <v-list-item-subtitle>Score: {{movie.userScore}}</v-list-item-subtitle>
        <v-list-item-text>{{movie.overview}}</v-list-item-text>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  name: "MovieItem",
  props: ["movie"],
  computed: {
    color() {
      return this.movie.userScore >= 8;
    },
  },
};
</script>

<style scoped>
.mx-auto {
  margin: 0.5em;
}

.green {
  background-color: lightgreen;
}
.red {
  background-color: lightcoral;
}

.top-line {
  display: flex;
  justify-content: space-between;
}
</style>
