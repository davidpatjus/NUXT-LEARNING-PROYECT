// @unocss-include DON'T FORGET TO ADD THIS COMMENT
import { mdi } from 'vuetify/iconsets/mdi'
import { fa } from 'vuetify/iconsets/fa'
import { defineNuxtPlugin } from '#imports'
import type { IconProps } from 'vuetify'
import { h } from 'vue'
import { Icon } from '@iconify/vue/dist/iconify.js'

// Mdi aliases
const mdiAliases = {
  email: 'email',
  emailOutline: 'email-outline',
  lock: 'lock',
  lockOutline: 'lock-outline',
  eye: 'eye',
  eyeOff: 'eye-off',
  arrowRight: 'arrow-right',
  github: 'github',

  rocket: 'rocket-launch',
  play: 'play-circle',
  setup: 'cog-outline',
  analytics: 'chart-bar',
  security: 'shield-check',
  start: 'arrow-right-circle',
  store: 'store',

  dashboard: 'view-dashboard',
  notifications: 'bell-outline',
  account: 'account-circle',
  profile: 'account-outline',
  settings: 'cog',
  logout: 'logout',
  facebook: 'facebook',
  twitter: 'twitter',
  linkedin: 'linkedin',

  "chevronRight": "chevron-right",
  "arrowLeft": "arrow-left",
  "cart": "cart",

  productAdd: "plus",
  productEdit: "pencil",
  productDelete: "delete",
  productSave: "content-save",
  productCancel: "cancel",

  reset: "reload"
};

// Font Awesome aliases
const faAliases = {
  email: 'envelope',
  emailOutline: 'envelope-open',
  lock: 'lock',
  lockOutline: 'lock-open',
  eye: 'eye',
  eyeOff: 'eye-slash',
  arrowRight: 'arrow-right',
  github: 'github',

  rocket: 'rocket',
  play: 'play-circle',
  setup: 'cogs',
  analytics: 'pie-chart',
  security: 'shield',
  start: 'arrow-right',
  store: 'shopping-basket',
  
  dashboard: 'tachometer',
  notifications: 'bell',
  account: 'user-circle',
  profile: 'user',
  settings: 'cogs',
  logout: 'sign-out',
  facebook: 'facebook',
  twitter: 'twitter',
  linkedin: 'linkedin',

  "chevronRight": "chevron-right",
  "arrowLeft": "arrow-left",
  "cart": "shopping-cart",

  "productAdd": "plus",
  "productEdit": "pencil",
  "productDelete": "trash",
  "productSave": "save",
  "productCancel": "times",
  "reset": "refresh"
};

// Tabler aliases
const tablerAliases = {
  email: 'mail',
  emailOutline: 'mail-opened',
  lock: 'lock',
  lockOutline: 'lock-open',
  eye: 'eye',
  eyeOff: 'eye-off',
  arrowRight: 'arrow-right',
  github: 'brand-github',
  store: 'building-store',

  rocket: 'rocket',
  play: 'play',
  setup: 'settings',
  analytics: 'chart-bar',
  security: 'shield-check',
  start: 'arrow-right-circle',

  dashboard: 'dashboard',
  notifications: 'bell',
  account: 'user-circle',
  profile: 'user',
  settings: 'settings',
  logout: 'logout',
  facebook: 'brand-facebook',
  twitter: 'brand-twitter',
  linkedin: 'brand-linkedin',

  "chevronRight": "chevron-right",
  "arrowLeft": "arrow-left",
  "cart": "shopping-cart",

  "productAdd": "plus",
  "productEdit": "edit",
  "productDelete": "trash",
  "productSave": "device-floppy",
  "productCancel": "x",
  "reset": "refresh"
};

// Pixelarticons aliases
const pixelarticonsAliases = {
  email: 'mail',
  emailOutline: 'email-outline',
  lock: 'lock',
  lockOutline: 'lock-open',
  eye: 'eye',
  eyeOff: 'eye-closed',
  arrowRight: 'arrow-right',
  github: 'github',
  store: 'store',

  rocket: 'zap',
  play: 'play',
  setup: 'sliders',
  analytics: 'chart-bar',
  security: 'shield',
  start: 'arrow-right',

  dashboard: 'dashboard',
  notifications: 'notification',
  account: 'user',
  profile: 'briefcase-account',
  settings: 'sliders',
  logout: 'logout',
  facebook: 'camera-face',
  twitter: 'comment',
  linkedin: 'briefcase',

  "chevronRight": "chevron-right",
  "arrowLeft": "arrow-left",
  "cart": "cart",

  "productAdd": "plus",
  "productEdit": "edit",
  "productDelete": "trash",
  "productSave": "save",
  "productCancel": "undo",
  "reset": "undo"
};

// Carbon aliases
const carbonAliases = {
  email: 'email',
  lock: 'locked',
  lockOutline: 'locked-open',
  eye: 'view',
  eyeOff: 'view-off',
  arrowRight: 'arrow-right',
  github: 'logo-github',

  rocket: 'rocket',
  play: 'play',
  setup: 'settings',
  analytics: 'chart-bar',
  security: 'security',
  start: 'arrow-right',
  store: 'store',

  dashboard: 'dashboard',
  notifications: 'notification',
  account: 'user',
  profile: 'user-profile',
  settings: 'settings',
  logout: 'logout',
  facebook: 'logo-facebook',
  twitter: 'logo-twitter',
  linkedin: 'logo-linkedin',

  "chevronRight": "chevron-right",
  "arrowLeft": "arrow-left",
  "cart": "shopping-cart",
  
  "productAdd": "add",
  "productEdit": "edit",
  "productDelete": "trash-can",
  "productSave": "save",
  "productCancel": "close",
  "reset": "reset"
};

// Prefijos para los iconos
const iconPrefixes = {
  mdi: 'mdi-',
  fa: 'fas fa-',
  tabler: 'tabler:',
  pixelarticons: 'pixelarticons:',
  carbon: 'carbon:',
};

// Aliases
const iconAliases = {
  mdi: mdiAliases,
  fa: faAliases,
  tabler: tablerAliases,
  pixelarticons: pixelarticonsAliases,
  carbon: carbonAliases,
};

// Generar los aliases
const generateAliases = (defaultSet: keyof typeof iconPrefixes) => {
  // Obtener el prefijo y los aliases del set seleccionado
  const prefix = iconPrefixes[defaultSet];
  // Obtener los aliases del set seleccionado
  const selectedAliases = iconAliases[defaultSet];
  // Generar los aliases con el prefijo
  const resultAliases = Object.fromEntries(
    Object.entries(selectedAliases).map(([key, value]) => [key, `${prefix}${value}`])
  );

  return resultAliases;
};

// Crear un set de iconos
const createIconSet = (prefix: string) => ({

  // Metodo para obtener el icono con el prefijo
  component: (props: IconProps) => h(Icon, {
    ...props,
    icon: `${prefix}:${props.icon}`,
  }),

});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('vuetify:configuration', ({ vuetifyOptions }) => {

    // Set de iconos por defecto
    const defaultSet = 'carbon'; // "mdi" | "fa" | "tabler" | "pixelarticons" | "carbon"

    vuetifyOptions.icons = {
      defaultSet: defaultSet,
      sets: {
        mdi: mdi,
        fa: fa,
        tabler: createIconSet('tabler'),
        pixelarticons: createIconSet('pixelarticons'),
        carbon: createIconSet('carbon'),
      },
      aliases: generateAliases(defaultSet),
    };
  });
});
