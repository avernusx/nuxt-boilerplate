module.exports = {
  head: {
    title: 'Nuxt boilerplate',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, maximum-scale=1.0' },
      { name: 'description', content: 'Nuxt boilerplate' },
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/uploads/favicon.png' }],
    script: [],
  },
  modules: [
    ['nuxt-sass-resources-loader', 'sass/*.sass'],
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/router',
    '@nuxtjs/sentry',
    '@nuxtjs/style-resources'
  ],
  buildModules: ['@nuxt/typescript-build'],
  sentry: {
    dsn: "",
    config: {}
  },
  css: [
    '@/style/main.sass',
  ],
  styleResources: {
    sass: [],
  },
  axios: {
    proxy: true,
  },
  proxy: [
    'http://your-backend-here:80/api'
  ],
  router: {
    middleware: [],
  },
  loading: { color: '#ff2d32' },
  plugins: [],
};

