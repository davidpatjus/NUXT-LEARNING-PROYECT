<template>
    <v-card color="surface" elevation="4" class="rounded-lg">
      <v-card-title class="text-h5 text-primary">
        {{ userData?.name || 'User Profile' }}
      </v-card-title>
      <v-card-text>
        <v-list>
          <v-list-item>
            <template v-slot:prepend>
              <v-icon color="primary">$account</v-icon>
            </template>
            <v-list-item-title>Name</v-list-item-title>
            <v-list-item-subtitle>{{ userData?.name || 'Not set' }}</v-list-item-subtitle>
          </v-list-item>
  
          <v-list-item>
            <template v-slot:prepend>
              <v-icon color="primary">$email</v-icon>
            </template>
            <v-list-item-title>Email</v-list-item-title>
            <v-list-item-subtitle>{{ userData?.email || 'Not set' }}</v-list-item-subtitle>
          </v-list-item>
  
          <v-list-item>
            <template v-slot:prepend>
              <v-icon color="primary">$phone</v-icon>
            </template>
            <v-list-item-title>Phone</v-list-item-title>
            <v-list-item-subtitle>{{ userData?.phone || 'Not set' }}</v-list-item-subtitle>
          </v-list-item>
  
          <v-list-item>
            <template v-slot:prepend>
              <v-icon color="primary">$location</v-icon>
            </template>
            <v-list-item-title>Address</v-list-item-title>
            <v-list-item-subtitle>{{ userData?.address || 'Not set' }}</v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </template>
  
  <script setup>
  const userData = inject('userData');
  </script>