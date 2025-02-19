import { defineNuxtModule } from "nuxt/kit"

export default defineNuxtModule({
    meta: {
      name: 'seo-module',
      configKey: 'seo'
    },
    defaults: {
      title: 'Mi App',
      description: 'Descripción por defecto'
    },
    setup(options, nuxt) {
        nuxt.options.app.head = {
          title: options.title,
          meta: [
            { name: 'description', content: options.description }
          ]
        }
    }
  })