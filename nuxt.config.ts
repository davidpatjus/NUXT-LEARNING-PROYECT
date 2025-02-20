import { nuxtUIBlueprint, shadcnBlueprint, elegantRedBlackBlueprint } from './vuetify-blueprints';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['vuetify-nuxt-module', '~/modules/myModule', '~/modules/seoModule'],
  css: ['~/assets/scss/globals.scss', '@fortawesome/fontawesome-free/css/all.css'],
  vuetify: {
    vuetifyOptions: {
      blueprint: elegantRedBlackBlueprint, // nuxtUIBlueprint, shadcnBlueprint, elegantRedBlackBlueprint
      icons: {
        defaultSet: "custom", // iconsSetForNuxt, iconsSetForshadcn
        sets: [{
          name: "fa",
          cdn: "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@latest/css/all.min.css"
        }, {
          name: "mdi",
          cdn: "https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css"
        }],
      },
    },
    moduleOptions: {
      disableVuetifyStyles: true,
      // styles: { configFile: './assets/scss/vuetify.scss' },
    },
  },
  myModule: {
    message: '¡Módulo Pats cargado con éxito! 🚀'
  },
  seo: {
    title: 'PATS R4PSTAR',
    description: 'Ohana significa familia, y tu familia nunca te abandona ni te olvida.'
  },
  components: true,
});