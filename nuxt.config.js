// eslint-disable-next-line no-unused-vars, nuxt/no-cjs-in-config
const contentful = require('contentful')
// eslint-disable-next-line nuxt/no-cjs-in-config
const config = require('./.contentful.json')
// ここまで追加
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  mode: 'universal',
  // add
  env: {
    CTF_SPACE_ID: config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  /*
   ** Headers of the page
   */
  head: {
    title: 'jam-site-contentful-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css', // ここを追加
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~plugins/font-awesome', ssr: false }, // ここを追加
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // add
    '@nuxtjs/markdownit',
    'nuxt-fontawesome',
  ],

  markdownit: {
    html: true,
    injected: true,
    linkify: true,
    breaks: false,
  },

  fontawesome: {
    component: 'fa',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {},
  },
}
