<template>
  <v-app>

    <!-- Navegacion izquierda -->
    <v-navigation-drawer v-model="drawer" color="surface" permanent>

      <!-- Usuario -->
      <v-list-item
        prepend-avatar="https://avatars.githubusercontent.com/u/166860637?v=4"
        :title="'Admin Panel'"
        :subtitle="'Administrator'"
        class="mt-4"
      ></v-list-item>

      <v-divider class="my-4"></v-divider>

      <!-- Lista de Navegacion -->
      <v-list density="compact" nav>
        <v-list-item
          v-for="(item, index) in NavItems"
          :key="index"
          :title="item.title"
          :prepend-icon="item.icon"
          :value="item.title.toLowerCase()"
          :to="`/${item.title.toLowerCase()}`"
          color="primary"
        ></v-list-item>
      </v-list>

      <!-- Cerrar Sesion -->
			<div class="d-flex justify-center bottom-0">
				<v-btn color="red" class="mt-4" @click="$auth.logout">Logout</v-btn>
			</div>
    </v-navigation-drawer>

    <!-- Barra de Navegacion Superior -->
    <v-app-bar color="surface" elevation="1">
      
      <!-- Titulo -->
      <v-app-bar-title class="text-primary font-weight-bold">
        Admin Panel
      </v-app-bar-title>

      <v-spacer></v-spacer>

      <!--  -->
      <div class="ga-3 d-flex mr-4">
        <v-btn icon="$notifications" variant="text"></v-btn>
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
      </div>

    </v-app-bar>

    <!-- Contenido Principal -->
    <v-main class="bg-background">
      <v-container fluid >
        <slot />
      </v-container>
    </v-main>

    <!-- Pie De Pagina -->
    <v-footer class="bg-surface text-center d-flex flex-column ">
      <div>
        <v-btn
          v-for="icon in ['$facebook', '$twitter', '$linkedin']"
          :key="icon"
          class="mx-4"
          :icon="icon"
          variant="text"
        ></v-btn>
      </div>
      <div class="pt-4 text-body-2">
        {{ new Date().getFullYear() }} — <strong>SaaSApp Admin</strong>
      </div>
    </v-footer>

  </v-app>
</template>

<script setup>
const { $auth } = useNuxtApp();
const drawer = ref(true);

const NavItems = [
    { title: 'Admin', icon: '$account' },
    { title: 'Dashboard', icon: '$dashboard' },
    { title: 'Products', icon: '$cart'},
  ]

  const menuItems = [
    // { title: 'Profile', icon: '$profile' },
    { title: 'Products', icon: '$cart'},
    // { title: 'Settings', icon: '$settings' },
    { title: 'Logout', icon: '$logout' }
  ]

    const handleMenuItemClick = (item) => {
      console.log(item)
    // Cerrar sesion
    if (item.title === 'Logout') {
    $auth.logout();  
    }
    
    // Navegar a la pagina de productos
    if (item.title === 'Products') {
    navigateTo('/products')
    }
}

</script>
