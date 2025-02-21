// Inicializar el formulario del producto
export const getEmptyProductForm = () => ({
    id: null,
    name: '',
    description: '',
    price: '',
    image: '',
    specifications: [],
  });
  
  // Abrir el modal de producto
  export const openProductDialog = (product) => {
    return product 
      ? { ...product }
      : getEmptyProductForm();
  };
  
  // Agregar especificación al producto
  export const addSpecification = (specifications) => {
    specifications.push({ label: '', value: '' });
  };
  
  // Eliminar especificación del producto
  export const removeSpecification = (specifications, index) => {
    specifications.splice(index, 1);
  };
  