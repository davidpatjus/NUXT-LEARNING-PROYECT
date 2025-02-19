import { defineNuxtModule, addComponentsDir } from 'nuxt/kit'
import { resolve } from 'pathe'

export default defineNuxtModule({
  meta: {
    name: 'my-module',
    configKey: 'myModule'
  },

  defaults: {
    message: 'Hola desde el módulo 👋'
  },
	
  async setup(options, nuxt) {
    console.log(options.message)

    await addComponentsDir({
        path: resolve(nuxt.options.rootDir, 'modules/components'),
        prefix: 'my'
      })
  }
})
