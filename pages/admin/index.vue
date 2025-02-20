<template>
  <v-container>
    <v-row class="mb-4" align="center">
      <v-col>
        <h1 class="text-h4 font-weight-bold text-primary">Admin - Products</h1>
      </v-col>
      <v-col class="text-right">
        <v-btn color="primary" class="mr-2" @click="openDialog()">
          <v-icon left>$productAdd</v-icon>
          Add Product
        </v-btn>
        <v-btn color="red" @click="resetProducts">
          <v-icon left>$reset</v-icon>
          Reset Products
        </v-btn>
      </v-col>
    </v-row>

    <v-table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.id }}</td>
          <td><v-img :src="product.image" width="80" height="50"></v-img></td>
          <td>{{ product.name }}</td>
          <td>${{ product.price }}</td>
          <td class="d-flex ga-4 mt-3">
            <v-btn icon size="small" color="info" @click="openDialog(product)">
              <v-icon>$productEdit</v-icon>
            </v-btn>
            <v-btn icon size="small" color="error" @click="deleteProduct(product.id)">
              <v-icon>$productDelete</v-icon>
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>

    <!-- Modal de Crear/Editar -->
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="text-h5">{{ isEditing ? "Edit Product" : "New Product" }}</span>
        </v-card-title>
        <v-card-text>
          <v-text-field v-model="form.name" label="Name"></v-text-field>
          <v-textarea v-model="form.description" label="Description"></v-textarea>
          <v-text-field v-model="form.price" label="Price" type="number"></v-text-field>
          <v-text-field v-model="form.image" label="Image URL"></v-text-field>
          
          <v-divider class="my-4"></v-divider>
          <h3 class="text-h6">Specifications</h3>
          <v-row v-for="(spec, index) in form.specifications" :key="index">
            <v-col cols="5">
              <v-text-field v-model="spec.label" label="Label"></v-text-field>
            </v-col>
            <v-col cols="5">
              <v-text-field v-model="spec.value" label="Value"></v-text-field>
            </v-col>
            <v-col cols="2">
              <v-btn icon color="error" @click="removeSpecification(index)">
                <v-icon>$productDelete</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-btn color="secondary" @click="addSpecification">Add Specification</v-btn>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn variant="text" @click="closeDialog">
            <v-icon left>$productCancel</v-icon> Cancel
          </v-btn>
          <v-btn color="primary" @click="saveProduct">
            <v-icon left>$productSave</v-icon> Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup>
definePageMeta({
  middleware: "auth",
  layout: "admin",
});

const { products, addProduct, updateProduct, removeProduct, resetProducts } = useProducts();
const dialog = ref(false);
const isEditing = ref(false);
const form = ref({ id: null, name: "", description: "", price: "", image: "", specifications: [] });

// Abrir modal
const openDialog = (product = null) => {
  isEditing.value = !!product;
  form.value = product ? { ...product } : { id: null, name: "", description: "", price: "", image: "", specifications: [] };
  dialog.value = true;
};

// Guardar producto
const saveProduct = () => {
  isEditing.value ? updateProduct(form.value) : addProduct(form.value);
  closeDialog();
};

// Cerrar modal
const closeDialog = () => {
  dialog.value = false;
  form.value = { id: null, name: "", description: "", price: "", image: "", specifications: [] };
};

// Eliminar producto
const deleteProduct = (id) => removeProduct(id);

// Agregar especificación
const addSpecification = () => {
  form.value.specifications.push({ label: "", value: "" });
};

// Eliminar especificación
const removeSpecification = (index) => {
  form.value.specifications.splice(index, 1);
};
</script>
