<template>
  <div>
    Movie
    <AddMovie />
    <Movies />
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
};
</script>

<style scoped></style>
