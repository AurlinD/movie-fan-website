import Vue from "vue";
import Router from "vue-router";
import Profile from "./views/ProfilePage.vue";
import Movie from "./views/MoviePage.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "ProfilePage",
      component: Profile,
    },
    {
      path: "/movie",
      name: "MoviePage",
      component: Movie,
    },
  ],
});
