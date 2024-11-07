import { script } from "./ecosystem.config"

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Saviour Agency',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  },

  server: {
    host: process.env.APP_HOST,
    port: process.env.APP_PORT
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@assets/css/font.css',
    '@assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
      '~/plugins/axios'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/toast',
  ],

  toast: {
    position: 'bottom-right',
    duration: 3000,
    action: {
      text: 'close',
      onClick: (e, toastObject) => {
        toastObject.goAway(0)
      },
    },
  },

  router: {
    scrollBehavior(to, from, savedPosition) {
      if (to.hash) {
        return {
          selector: to.hash,
          behavior: 'smooth',
        };
      } else if (savedPosition) {
        return savedPosition;
      } else {
        return { x: 0, y: 0 };
      }
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.VUE_APP_BASE_URL,
    common: {
      'Accept': 'application/json',
    },
  },

  env: {
    VUE_APP_BASE_URL: process.env.VUE_APP_BASE_URL,
    VUE_APP_TOKEN: process.env.VUE_APP_TOKEN,
    VUE_APP_RECAPTCHA_SITE_KEY: process.env.VUE_APP_RECAPTCHA_SITE_KEY
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
