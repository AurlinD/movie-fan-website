<template>
  <v-card
    class="mx-auto"
    v-bind:class="[color ? 'green' : 'red']"
    max-width="344"
    outlined
  >
    <v-list-item>
      <v-list-item-content>
        <div class="top-line">
          <v-list-item-title class="headline mb-1">{{
            movie.title
          }}</v-list-item-title>
          <v-btn
            v-if="flag === 'true'"
            @click="$emit('function-movie')"
            small
            class="ma-2"
            >Delete</v-btn
          >
          <v-btn v-else @click="$emit('function-movie')" small class="ma-2"
            >Add</v-btn
          >
        </div>
        <v-list-item-subtitle
          >Release Date: {{ movie.releaseDate }}</v-list-item-subtitle
        >
        <v-list-item-subtitle
          >Score: {{ movie.userScore }}</v-list-item-subtitle
        >
        <v-list-item-group>{{ movie.overview }}</v-list-item-group>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  name: "MovieItem",
  props: ["movie", "flag"],
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
  overflow: hidden;
}
</style>
