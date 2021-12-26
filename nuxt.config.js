export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'appcent-case',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['@/assets/scss/app.scss'],

  plugins: [{ src: '@/plugins/vue-awesome-swiper.js', mode: 'client' }],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/moment',
    '@nuxtjs/fontawesome',
  ],

  modules: ['bootstrap-vue/nuxt', '@nuxtjs/axios'],
  bootstrapVue: {
    icons: true,
  },
  env: {
    token:
      'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYWU1MjM5NjQ0MWNhNzZhOTJhMzQ0MWRhMWQxZjIyMCIsInN1YiI6IjYxYzQyYTYyZWNhZWY1MDA4ZWFmZTFhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MZsBC8SxrKXRJIbn9Rt4acJcqjaSLx3jn-fScgU2y4g',
    imgPath: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2',
  },
  axios: {
    baseURL: 'https://api.themoviedb.org/3/',
  },

  build: {},
}
