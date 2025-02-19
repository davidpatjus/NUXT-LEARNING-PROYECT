export default defineNuxtRouteMiddleware(() => {
  const { $auth } = useNuxtApp();

  // Verificar si el usuario esta autenticado
  if (!$auth.isAuthenticated.value) {
    return navigateTo("/login");
  }
});
