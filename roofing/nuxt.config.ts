// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  // devtools: { enabled: true }
  components: [
    { path: '~/components', pathPrefix: false, extensions: ['vue'] },
    { path: '~/shared', pathPrefix: false, extensions: ['vue'] },
    // '~/components'
  ],
  plugins: [
    {src: '~/plugins/ScrollTo.client.js', mode: 'client'}, 
    {src: '~/plugins/ScrollTo.server.js', mode: 'server'}, 
    {src: '~/plugins/LazyImage.client.js', mode: 'client'}, 
    {src: '~/plugins/LazyImage.server.js', mode: 'server'}, 
  ],
  css: ["bootstrap/dist/css/bootstrap.min.css"],
});