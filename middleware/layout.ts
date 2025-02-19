export default defineNuxtRouteMiddleware(() => {
  const { $auth } = useNuxtApp();

  // Asigna el Layout según el rol del usuario
  if ($auth.user?.value?.role === "admin") {
    return setPageLayout("admin");
  } else {
    return setPageLayout("user");
  }
});
