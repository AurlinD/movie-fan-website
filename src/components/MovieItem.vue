<template>
  <v-card class="mx-auto" v-bind:class="[color ? 'green' : 'red']" max-width="344" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">{{movie.title}}</v-list-item-title>
        <v-list-item-subtitle>'Release Date: {{movie.releaseDate}}</v-list-item-subtitle>
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
  margin: 1em;
}

.green {
  background-color: lightgreen;
}
.red {
  background-color: lightcoral;
}
</style>
