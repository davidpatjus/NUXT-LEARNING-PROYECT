export default defineNuxtPlugin(() => {
  
  // Definir el tipo del Usuario 
  type User = { 
    email: string; 
    password: string; 
    name: string;
    role: "admin" | "user";
  };

  // Crear las cookies
  const token = useCookie<string | null>("auth_token", { maxAge: 86400 }); 
  const storedUser = useCookie<User | null>("auth_user", { maxAge: 86400 }); 

  // Crear el estado del usuario
  const user = useState<User | null>("auth_user_state", () => storedUser.value); 

  // Usuarios quemados (simulación)
  const dummyUsers: User[] = [
    { email: "pats@example.com", password: "pats123", name: "David Patiño", role: "user" },
    { email: "admin@example.com", password: "admin123", name: "Admin", role: "admin" },
  ];

  // Funcion de login
  const login = async (email: string, password: string) => {
    return new Promise((resolve, reject) => {

      setTimeout(() => {

        // Buscar usuario
        const foundUser = dummyUsers.find(
          (user) => user.email === email && user.password === password
        );

        // Invalidar Credenciales
        if (!foundUser) {
          return reject(new Error("Invalid email or password"));
        }

        // Simular token (normalmente vendría del backend)
        token.value = "dummy_token_" + foundUser.email;
        storedUser.value = foundUser; // Guardar usuario en cookie
        user.value = foundUser;

        resolve(foundUser);
      }, 1000); 

    });
  };

  // Funcion de logout 
  const logout = () => {
    token.value = null;
    storedUser.value = null;
    user.value = null;
    navigateTo("/login");
  };

  // Verificar si el usuario esta autenticado
  const isAuthenticated = computed(() => !!token.value);

  return {
    provide: {
      auth: {
        login,
        logout,
        isAuthenticated,
        user,
      },
    },
  };
});
