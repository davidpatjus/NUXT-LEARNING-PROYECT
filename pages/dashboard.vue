<template>
  <v-container>
    <h1>
      Welcome, {{ $auth.user?.value?.name || "Guest" }} |
      {{ $auth.user.value?.role }}
    </h1>
  </v-container>
</template>

<script setup lang="ts">
const { $auth } = useNuxtApp();
definePageMeta({
  middleware: ["auth", "layout"],
});
</script>
