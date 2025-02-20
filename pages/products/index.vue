<template>
  <div>
    <v-container>

      <!-- Encabezado -->
      <v-row class="mb-8">
        <v-col cols="12">
          <h1 class="text-h3 font-weight-bold text-primary mb-4">Products</h1>
          <v-divider></v-divider>
        </v-col>
      </v-row>

      <!-- Productos -->
      <v-row>
        <ProductsCard v-for="product in products" :key="product.id" :product="product" />
      </v-row>

    </v-container>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["auth", "layout"]
});
const { products } = useProducts();
</script>
