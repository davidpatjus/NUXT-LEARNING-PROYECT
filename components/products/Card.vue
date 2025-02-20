<template>
  <v-col cols="12" sm="6" md="4">
    <v-card :to="`/products/${product.id}`" color="surface" elevation="4" class="h-100">
      <!-- Imagen  -->
      <v-img :src="product.image" height="200" cover class="bg-grey-darken-2"></v-img>

      <!-- Titulo -->
      <v-card-title class="text-primary">{{ product.name }}</v-card-title>

      <!-- Detalles -->
      <v-card-text>
        <p class="mb-2">{{ product.description }}</p>
        <v-chip color="primary" label class="mt-2">${{ product.price }}</v-chip>
      </v-card-text>

      <!-- Boton -->
      <v-card-actions>
        <v-btn color="primary" variant="tonal" block>
          Ver Detalles
          <v-icon right class="ml-2">$chevronRight</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script setup>
defineProps({
  product: Object,
});
</script>
