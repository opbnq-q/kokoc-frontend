export default defineNuxtConfig({
  devtools: { enabled: false },

  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    '@nuxt/image',
    'vue3-carousel-nuxt',
  ],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          fontFamily: {
            montserrat: ['Montserrat', 'sans-serif']
          }
        }
      }
    }
  },
  fonts: {
    montserrat: true
  },

  compatibilityDate: '2024-10-03',

})
