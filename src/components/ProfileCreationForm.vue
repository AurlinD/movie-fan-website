<template>
  <v-form>
    <v-container>
      <v-col>
        <v-text-field
          v-model="firstName"
          label="First name"
          required
        ></v-text-field>
      </v-col>

      <v-col>
        <v-text-field
          :disabled="isDisabledLastName"
          v-model="lastName"
          label="Last name"
          required
        ></v-text-field>
      </v-col>

      <v-col>
        <v-text-field
          v-model="bio"
          :disabled="isDisabledShortBio"
          :counter="140"
          :rules="bioRules"
          label="Short-bio"
          required
        ></v-text-field>
      </v-col>

      <!-- <v-btn class="mr-4" @click="submit">submit</v-btn> -->
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
    bioRules: [(bio) => bio.length <= 140 || "Exceeded character limit"],
  }),
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
