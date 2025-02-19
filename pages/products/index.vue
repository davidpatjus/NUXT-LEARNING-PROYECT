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
        <v-col
          v-for="product in products"
          :key="product.id"
          cols="12"
          sm="6"
          md="4"
        >
          <v-card
            :to="`/products/${product.id}`"
            color="surface"
            elevation="4"
            class="h-100"
          >
            <!-- Imagen  -->
            <v-img
              :src="product.image"
              height="200"
              cover
              class="bg-grey-darken-2"
            ></v-img>

            <!-- Titulo -->
            <v-card-title class="text-primary">{{ product.name }}</v-card-title>

            <!-- Detalles -->
            <v-card-text>
              <p class="mb-2">{{ product.description }}</p>
              <v-chip color="primary" label class="mt-2">
                ${{ product.price }}
              </v-chip>
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
      </v-row>

    </v-container>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["auth", "layout"]
});

const products = ref([
  {
    id: 1,
    name: "Laptop Pro X",
    description: "Laptop de última generación con procesador i9 y 32GB RAM",
    price: 1299.99,
    image: "https://picsum.photos/id/0/500/300",
  },
  {
    id: 2,
    name: "Smartphone Ultra",
    description: "Teléfono inteligente con cámara de 108MP y pantalla AMOLED",
    price: 899.99,
    image: "https://picsum.photos/id/1/500/300",
  },
  {
    id: 3,
    name: "Tablet Air",
    description: "Tablet ligera con pantalla retina y lápiz digital incluido",
    price: 599.99,
    image: "https://picsum.photos/id/2/500/300",
  },
  {
    id: 4,
    name: "Laptop Pro X",
    description: "Laptop de última generación con procesador i9 y 32GB RAM",
    price: 1299.99,
    image: "https://picsum.photos/id/0/500/300",
  },
  {
    id: 5,
    name: "Smartphone Ultra",
    description: "Teléfono inteligente con cámara de 108MP y pantalla AMOLED",
    price: 899.99,
    image: "https://picsum.photos/id/1/500/300",
  },
  {
    id: 6,
    name: "Tablet Air",
    description: "Tablet ligera con pantalla retina y lápiz digital incluido",
    price: 599.99,
    image: "https://picsum.photos/id/2/500/300",
  },
]);
</script>
