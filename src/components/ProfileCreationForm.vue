<template>
  <v-form>
    <v-container>
      <v-col>
        <v-text-field
          v-model="firstname"
          label="First name"
          required
        ></v-text-field>
      </v-col>

      <v-col>
        <v-text-field
          v-model="lastname"
          label="Last name"
          required
        ></v-text-field>
      </v-col>

      <v-col>
        <v-text-field
          v-model="bio"
          :counter="140"
          label="Short-bio"
          required
        ></v-text-field>
      </v-col>

      <v-btn class="mr-4" @click="submit">submit</v-btn>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "ProfileCreationForm",
  data: () => ({
    firstname: "",
    lastname: "",
    bio: "",
  }),
};
</script>

<style scoped></style>
