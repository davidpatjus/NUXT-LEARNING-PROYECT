<template>
    <div>
      <h2>Admin Panel</h2>
      <p>Welcome, {{ $auth.user.value.name }}</p>
    </div>
  </template>
  
  <script setup>
  definePageMeta({
    middleware: "auth",
    layout: "admin",
  });
  </script>