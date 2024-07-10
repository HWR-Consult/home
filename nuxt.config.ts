import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'HWR Tech Consult',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { hid: 'description', name: 'description', content: 'HWR Tech Consult é uma empresa de consultoria de tecnologia especializada em soluções personalizadas para diversos negócios.' },
        { hid: 'keywords', name: 'keywords', content: 'consultoria, tecnologia, desenvolvimento de software, HWR Tech Consult' },
        { name: 'author', content: 'HWR Tech Consult' },
        { property: 'og:title', content: 'HWR Tech Consult' },
        { property: 'og:description', content: 'HWR Tech Consult é uma empresa de consultoria de tecnologia especializada em soluções personalizadas para diversos negócios.' },
        { property: 'og:image', content: '/img/logo.png' },
        { property: 'og:url', content: 'https://www.hwrtechconsult.com' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'HWR Tech Consult' },
        { name: 'twitter:description', content: 'HWR Tech Consult é uma empresa de consultoria de tecnologia especializada em soluções personalizadas para diversos negócios.' },
        { name: 'twitter:image', content: '/img/logo.png' }
      ],
      link: [
        { rel: 'canonical', href: 'https://www.hwrtechconsult.com' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  css: [
    'primeicons/primeicons.css',
    '~/assets/css/main.css',
    'primeflex/primeflex.css',
  ],
  modules: [
    '@primevue/nuxt-module',
    '@zadigetvoltaire/nuxt-gtm' 
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
  },
  gtm: {
    id: 'GTM-KZVCGRN7',
    enabled: true,
    debug: true
  },
  runtimeConfig: {
    gtm: {
      id: 'GTM-KZVCGRN7' 
    }
  }
});
