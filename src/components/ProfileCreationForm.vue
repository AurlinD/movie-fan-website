<template>
  <v-form @submit="checkForm">
    <v-container>
      <v-col>
        <v-text-field
          v-model="firstName"
          :rules="firstNameRules"
          label="First name"
        ></v-text-field>
      </v-col>

      <v-col>
        <v-text-field
          :disabled="isDisabledLastName"
          :rules="lastNameRules"
          v-model="lastName"
          label="Last name"
        ></v-text-field>
      </v-col>

      <v-col>
        <v-text-field
          v-model="bio"
          :disabled="isDisabledShortBio"
          :counter="140"
          :rules="bioRules"
          label="Short-bio"
        ></v-text-field>
      </v-col>
      <v-btn class="mr-4" type="submit">submit</v-btn>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "ProfileCreationForm",
  data: () => ({
    errors: [],
    firstName: "",
    lastName: "",
    bio: "",
    bioRules: [
      (bio) => bio.length <= 140 || "Exceeded character limit",
      (bio) => !!bio || " Bio cannot be empty",
    ],
    firstNameRules: [
      (firstName) => !!firstName || " First Name cannot be empty",
    ],
    lastNameRules: [(lastName) => !!lastName || " Last Name cannot be empty"],
  }),
  methods: {
    checkForm(e) {
      if (
        this.firstName &&
        this.lastName &&
        this.bio &&
        this.bio.length <= 140
      ) {
        return true;
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

<style scoped></style>
