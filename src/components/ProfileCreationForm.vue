<template>
  <v-form class="profile-container" @submit="checkForm">
    <v-container>
      <v-col>
        <v-text-field v-model="firstName" label="First name"></v-text-field>
        <p class="error" v-if="firstNameError">{{ firstNameError }}</p>
      </v-col>
      <v-col>
        <v-text-field :disabled="isDisabledLastName" v-model="lastName" label="Last name"></v-text-field>
        <p class="error" v-if="lastNameError">{{ lastNameError }}</p>
      </v-col>

      <v-col>
        <v-text-field v-model="bio" :disabled="isDisabledShortBio" :counter="500" label="Short-bio"></v-text-field>
        <div class="error" v-if="bioErrors.length">
          <p v-bind:key="error" v-for="error in bioErrors">{{ error }}</p>
        </div>
      </v-col>
      <v-col>
        <v-btn class="mr-4" type="submit">submit</v-btn>
      </v-col>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "ProfileCreationForm",
  data: () => ({
    firstName: "",
    lastName: "",
    bio: "",
    firstNameError: "",
    lastNameError: "",
    bioErrors: [],
  }),
  methods: {
    checkForm(e) {
      this.firstNameError = "";
      this.lastNameError = "";
      this.bioErrors = [];

      if (
        this.firstName &&
        this.lastName &&
        this.bio &&
        this.bio.length <= 500
      ) {
        this.$router.push("movie");
      } else {
        if (!this.firstName) {
          this.firstNameError = "First Name cannot be empty";
        }
        if (!this.lastName) {
          this.lastNameError = "Last Name cannot be empty";
        }
        if (!this.bio) {
          this.bioErrors.push("Bio cannot be empty");
        }
        if (this.bio.length > 500) {
          this.bioErrors.push("Bio character count exceeded");
        }
      }
      e.preventDefault();
    },
  },
  computed: {
    isDisabledLastName() {
      return this.firstName === "";
    },
    isDisabledShortBio() {
      return this.lastName === "" || this.firstName === "";
    },
  },
};
</script>

<style scoped>
.profile-container {
  font-family: sans-serif;
}
.error {
  color: red;
}
</style>
