export function useProducts() {

  type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    specifications: { label: string; value: string }[];
  }

  const initialProducts = [
    {
      id: 1,
      name: "Laptop Pro X",
      description: "Laptop de última generación con procesador i9 y 32GB RAM",
      price: 1299.99,
      image: "https://picsum.photos/id/0/500/300",
      specifications: [
        { label: "Procesador", value: "Intel i9 12900K" },
        { label: "RAM", value: "32GB DDR5" },
        { label: "Almacenamiento", value: "1TB NVMe SSD" },
        { label: "Pantalla", value: '15.6" 4K OLED' },
      ],
    },
    {
      id: 2,
      name: "Smartphone Ultra",
      description: "Teléfono inteligente con cámara de 108MP y pantalla AMOLED",
      price: 899.99,
      image: "https://picsum.photos/id/1/500/300",
      specifications: [
        { label: "Pantalla", value: '6.7" AMOLED 120Hz' },
        { label: "Cámara", value: "108MP + 12MP + 10MP" },
        { label: "Batería", value: "5000mAh" },
        { label: "Procesador", value: "Snapdragon 8 Gen 2" },
      ],
    },
    {
      id: 3,
      name: "Tablet Air",
      description: "Tablet ligera con pantalla retina y lápiz digital incluido",
      price: 599.99,
      image: "https://picsum.photos/id/2/500/300",
      specifications: [
        { label: "Pantalla", value: '11" Liquid Retina' },
        { label: "Almacenamiento", value: "256GB" },
        { label: "Conectividad", value: "WiFi 6 + 5G" },
        { label: "Accesorios", value: "Lápiz digital incluido" },
      ],
    },
  ];

  const loadProducts = () => {
    const storedProducts = localStorage.getItem("products");
    return storedProducts ? JSON.parse(storedProducts) : [...initialProducts];
  };

  const products = ref(loadProducts());

  const saveProducts = () => {
    localStorage.setItem("products", JSON.stringify(products.value));
  };

  const getProductById = (id: string) => {
    return products.value.find((product: Product) => product.id === parseInt(id));
  };

  const addProduct = (product: Product) => {
    product.id = products.value.length ? Math.max(...products.value.map((p: { id: any; }) => p.id)) + 1 : 1;
    products.value.push(product);
    saveProducts();
  };

  const updateProduct = (updatedProduct: Product) => {
    const index = products.value.findIndex((p: { id: number; }) => p.id === updatedProduct.id);
    if (index !== -1) {
      products.value[index] = updatedProduct;
      saveProducts();
    }
  };

  const removeProduct = (id: string) => {
    products.value = products.value.filter((p: { id: string; }) => p.id !== id);
    saveProducts();
  };

  const resetProducts = () => {
    products.value = [...initialProducts];
    saveProducts();
  };

  return { products, getProductById, addProduct, updateProduct, removeProduct, resetProducts };
}