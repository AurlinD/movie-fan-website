import Vue from "vue";
import Router from "vue-router";
import Profile from "./views/Profile.vue";
import Movie from "./views/Movie.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "profile",
      component: Profile,
    },
    {
      path: "/movie",
      name: "Movie",
      component: Movie,
    },
  ],
});
