<template>
  <div>
    <v-container>
      
      <!-- Botón Retroceder -->
      <v-row>
        <v-col cols="12">
          <v-btn color="primary" variant="text" to="/products" class="mb-4">
            <v-icon left class="mr-2">$arrowLeft</v-icon>
            Go Back
          </v-btn>
        </v-col>
      </v-row>

      <!-- Contenedor Producto -->
      <v-row v-if="product">
        
        <!-- Imagen -->
        <v-col cols="12" md="6">
          <v-img
            :src="product.image"
            height="400"
            cover
            class="rounded-lg"
          ></v-img>
        </v-col>

        <!-- Detalles del Producto -->
        <v-col cols="12" md="6">
          <v-card color="surface" elevation="4" class="pa-6">
            
            <!-- Nombre Del Producto -->
            <h1 class="text-h3 font-weight-bold text-primary mb-4">
              {{ product.name }}
            </h1>

            <v-divider class="mb-4"></v-divider>

            <!-- Precio Del Producto -->
            <div class="text-h4 mb-4">${{ product.price }}</div>
          
            <!-- Descripcion Del Producto -->
            <p class="text-body-1 mb-6">{{ product.description }}</p>

            <!-- Selector de Cantidad -->
            <v-row class="mb-6">
              <v-col cols="12" md="6">
                <v-select
                  v-model="selectedQuantity"
                  :items="quantityOptions"
                  label="Amount"
                  variant="outlined"
                  prepend-icon="$cart"
                  class="w-33 justify-center"
                ></v-select>
              </v-col>
            </v-row>

            <!-- Botón Agregar Al Carrito -->
            <v-btn color="primary" size="x-large" block class="mb-4">
              Add to Cart
              <v-icon right class="ml-2">$cart</v-icon>
            </v-btn>

            <!-- Especificaciones -->
            <v-expand-transition>
              <v-card color="surface" class="mt-4" variant="outlined">
                <v-card-text>
                  <h3 class="text-h6 text-secondary mb-2">Especificaciones</h3>
                  <v-list density="compact">
                    <v-list-item
                      v-for="(spec, index) in product.specifications"
                      :key="index"
                      :title="spec.label"
                      :subtitle="spec.value"
                    ></v-list-item>
                  </v-list>
                </v-card-text>
              </v-card>
            </v-expand-transition>

          </v-card>
        </v-col>

      </v-row>

      <!-- Indicador Carga -->
      <v-row v-else>
        <v-col cols="12" class="text-center">
          <v-progress-circular
            indeterminate
            color="primary"
            size="64"
          ></v-progress-circular>
        </v-col>
      </v-row>

    </v-container>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["auth", "layout"],
});

const route = useRoute();

const { getProductById } = useProducts();

// Obtener Producto
const product = computed(() => getProductById(route.params.id));

// Cantidad Seleccionada
const selectedQuantity = ref(1);
// Opciones de cantidad
const quantityOptions = Array.from({ length: 10 }, (_, i) => i + 1);

</script>
