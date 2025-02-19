<template>
    <v-container class="fill-height d-flex align-center justify-center">
  
      <!-- Login Card -->
      <v-card class="pa-6 rounded-xl elevated-6" width="400">
        
        <!-- Lock Icon -->
        <div class="text-center">
          <v-icon icon="$lock" />
        </div>
  
        <!-- title text -->
        <MyHello class="text-h5" text="Welcome to the Pat's App" />
  
        <!-- subtitle text -->
        <v-card-subtitle class="text-center mb-6">
          Don't have an account? <a href="#" class="text-primary text-decoration-none font-weight-bold">Sign up</a>
        </v-card-subtitle>
  
        <!-- Form -->
        <v-form ref="form" @submit.prevent="handleLogin">
  
          <!-- email-field -->
          <v-text-field 
            label="Email" 
            v-model="email" 
            prepend-inner-icon="$email" 
            variant="outlined" 
            density="comfortable"
            class="rounded-lg"
          ></v-text-field>
          
          <!-- forgot-password -->
          <div class="d-flex justify-end">
            <a href="#" class="text-primary text-caption text-decoration-none font-weight-bold">Forgot password?</a>
          </div>
  
          <!-- password-field -->
          <v-text-field 
            label="Password" 
            v-model="password" 
            :type="showPassword ? 'text' : 'password'" 
            prepend-inner-icon="$lock" 
            :append-inner-icon="showPassword ? '$eyeOff' : '$eye'"
            @click:append-inner="togglePassword"
            variant="outlined" 
            density="comfortable"
            class="rounded-lg"
          ></v-text-field>
  
          <!-- login-button -->
          <v-btn block append-icon="$arrowRight" color="primary" class="mt-2 rounded-xl" :loading="loading" type="submit">Continue</v-btn>
  
          <!-- error-message -->
          <v-alert v-if="errorMessage" type="error" class="ma-2" dense>{{ errorMessage }}</v-alert>
  
        </v-form>
  
        <!-- Divider -->
        <div class="d-flex align-center my-4">
          <v-divider class="flex-grow-1"></v-divider>
          <span class="mx-2 text-caption font-weight-bold">or</span>
          <v-divider class="flex-grow-1"></v-divider>
        </div>
  
        <!-- Social Login -->
        <v-btn block outlined class="d-flex align-center justify-center rounded-xl" @click="loginWithGitHub">
          <v-icon icon="$github" class="mr-2" width="24" height="24" /> Continue with GitHub
        </v-btn>
  
        <!-- Terms of service -->
        <div class="text-caption text-center mt-3">
          By signing in, you agree to our <a href="#" class="text-primary text-decoration-none">Terms of Service</a>
        </div>
        
      </v-card>   
  
    </v-container>
    
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const { $auth } = useNuxtApp();
  
  const email = ref('');
  const password = ref('');
  const showPassword = ref(false);
  const loading = ref(false);
  const errorMessage = ref('');
  
  const handleLogin = async () => {
    errorMessage.value = '';
    loading.value = true;
  
    try {
    const user: any = await $auth.login(email.value, password.value);
    if (user.role === "admin") {
      navigateTo("/admin");
    } else {
      navigateTo("/dashboard");
    }
  } catch (error: any) {
    errorMessage.value = error.message;
  } finally {
    loading.value = false;
  }
  };
  
  const togglePassword = () => {
    showPassword.value = !showPassword.value;
  };
  
  const loginWithGitHub = () => {
    console.log('Logging in with GitHub');
  };
  
  </script>
  
  <style scoped>
  .v-container {
    min-height: 100vh;
  }
  </style>
  