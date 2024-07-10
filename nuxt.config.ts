// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
      ]
    }
  },
  css: [
    'primeicons/primeicons.css',
    '~/assets/css/main.css',
    'primeflex/primeflex.css',
  ],
  modules: [
    '@primevue/nuxt-module'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    transpile: ['primevue'],
  },
  primevue: {
    options: {
      theme: {
        preset: Aura
      }
    }
  }
})
