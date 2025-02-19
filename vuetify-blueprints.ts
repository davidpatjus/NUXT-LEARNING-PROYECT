import type { Blueprint } from "vuetify";

export const nuxtUIBlueprint: Blueprint = {
  defaults: {
    global: {
      font: {
        family: 'var(body-font-family)', 
      },
    },
    VBtn: {
      color: 'primary',
      rounded: 'lg',
      class: 'font-semibold',
    },
    VTextField: {
      variant: 'outlined',
      density: 'comfortable',
      class: 'rounded-lg',
    },
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#00DC82', // Verde de Nuxt UI
          secondary: '#2D2D2D', // Gris oscuro
          accent: '#00DC82', // Verde de Nuxt UI
        },
        variables: {
          "body-font-family": 'monospace', 
        }
      },
    },
  },
};

export const shadcnBlueprint: Blueprint = {
  defaults: {
    global: {
      font: {
        family: 'var(body-font-family)', 
      },
    },
    VBtn: {
      color: 'primary',
      rounded: 'md',
      class: 'font-medium',
    },
    VTextField: {
      variant: 'outlined', 
      density: 'comfortable',
      class: 'rounded-md',
    },
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          background: '#f3f4f6', // Blanco suave
          surface: '#ffffff',   // Superficies limpias
          primary: '#6366f1',   // Azul vibrante
          secondary: '#10b981', // Verde vibrante
          accent: '#f59e0b',    // Naranja vibrante
          error: '#ef4444',     // Rojo para errores
        },
        variables: {
          "body-font-family": "Roboto, sans-serif", // Usar la variable
        }
      },
    },
  },
};


export const elegantRedBlackBlueprint: Blueprint = {
  defaults: {
    global: {
      font: {
        family: 'var(body-font-family)', 
      },
    },
    VBtn: {
      color: 'primary',
      rounded: 'lg',
      elevation: 4,
      class: 'font-semibold text-white border-md',
    },
    VTextField: {
      variant: 'outlined',
      density: 'comfortable',
      class: 'rounded-md bg-surface text-white',
    },
    VCard: {
      class: 'rounded-xl'
    }
  },
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        colors: {
          background: '#0f0f0f', // Negro profundo
          surface: '#1c1c1e',    // Gris oscuro elegante
          primary: '#ff0000',   // Rojo vibrante
          secondary: '#e63946',  // Rojo intenso
          accent: '#c21807',   // Rojo profundo
          error: '#d00000',
        },
        variables: {
          "body-font-family": 'cursive', 
        }
      },
    },
  },
};
