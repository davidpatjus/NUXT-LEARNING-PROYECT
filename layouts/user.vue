<template>
    <v-app>

      <!-- Barra De Navegacion Superior -->
      <v-app-bar color="surface" elevation="1">

        <v-app-bar-title class="text-primary font-weight-bold">User Dashboard</v-app-bar-title>
        
        <v-spacer></v-spacer>
        
        <v-btn
          variant="text"
          to="/dashboard"
          class="mx-2"
        >
          <v-icon left class="mr-2">$dashboard</v-icon>
          Dashboard
        </v-btn>
        
        <v-btn icon="$notifications" variant="text" class="mx-2"></v-btn>

        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn
              icon="$account"
              variant="text"
              v-bind="props"
            ></v-btn>
          </template>
          <v-list color="surface">
            <v-list-item
              v-for="(item, index) in menuItems"
              :key="index"
              :value="index"
              :title="item.title"
              :prepend-icon="item.icon"
              @click="handleMenuItemClick(item)"
              color="primary"
            ></v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>
  
      <!-- Contenido Principal -->
      <v-main class="bg-background">
        <v-container fluid>
          <slot />
        </v-container>
      </v-main>
  
      <!-- Pie De Pagina -->
      <v-footer class="bg-surface">
        <v-container>
          <v-row justify="center" align="center">
            <v-col cols="12" class="text-center">
              <v-btn
                v-for="icon in ['$facebook', '$twitter', '$linkedin']"
                :key="icon"
                class="mx-4"
                :icon="icon"
                variant="text"
              ></v-btn>
            </v-col>
            <v-col cols="12" class="text-center text-body-2">
              {{ new Date().getFullYear() }} — <strong>SaaSApp User Portal</strong>
            </v-col>
          </v-row>
        </v-container>
      </v-footer>

    </v-app>
  </template>
  
  <script setup>
  const { $auth } = useNuxtApp();
  
  const menuItems = [
    // { title: 'Profile', icon: '$profile' },
    { title: 'Products', icon: '$cart'},
    { title: 'Hooks', icon: '$settings' },
    { title: 'Logout', icon: '$logout' }
  ]

  const handleMenuItemClick = (item) => {

    // Cerrar sesion
    if (item.title === 'Logout') {
    $auth.logout();  
    }
    
    // Navegar a la pagina de productos
    if (item.title === 'Products') {
    navigateTo('/products')
    }

    // Navegar a la pagina de hooks
    if (item.title === 'Hooks') {
    navigateTo('/hooks')
    }
}
  </script>