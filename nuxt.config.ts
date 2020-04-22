
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  dev: true,
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#00c58e',
    failedColor: '#f99595',
    height: '6px',
    throttle: 100,
    duration: 50000,
    continuous: false,
    rtl: false,
    css: true
  },
  // loading: '~/components/loading.vue',
  /*
  ** Global CSS
  */
  css: [
    'view-design/dist/styles/iview.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/iview',
    '@/plugins/clientApi/index',
    { src: '@/plugins/route', mode: 'client' },
    { src: '@/plugins/route', mode: 'server' }
  ],
  router: {
    middleware: 'i18n',
    base: '/'
  },
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    ['@nuxtjs/axios', { anotherOption: true }],
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    ['~/modules/simple', { token: '123' }]
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    proxy: true
  },
  proxy: {
    '/api/': { target: 'http://127.0.0.1:2001', changeOrigin: true, pathRewrite: { '^/api': '' } }
  },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['vue-i18n', 'axios'],
    /*
    ** You can extend webpack config here
    */
    extend (config: any, { isDev, isClient }: any) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
