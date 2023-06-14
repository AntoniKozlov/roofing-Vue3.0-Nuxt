// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  components: [
    { path: '~/components', pathPrefix: false, extensions: ['vue'] },
    { path: '~/shared', pathPrefix: false, extensions: ['vue'] },
  ],
  plugins: [
    {src: '~/plugins/ScrollTo.client.js', mode: 'client'}, 
    {src: '~/plugins/ScrollTo.server.js', mode: 'server'}, 
    {src: '~/plugins/LazyImage.client.js', mode: 'client'}, 
    {src: '~/plugins/LazyImage.server.js', mode: 'server'}, 
    {src: '~/plugins/UseBootstrap.client.js', mode: 'client'}, 
  ],
  css: ["bootstrap/dist/css/bootstrap.min.css"],
  app: {
    head: {
      title: 'Кровельные работы в Гомеле и Гомельской области',
      meta: [
        { charset: 'utf-8' },
        { name: 'keywords', 
          content: 'теремок, кровля, гомель, гомельская область, крыша, монтаж, металлочерепица, мягкая кровля, купить кровлю, продажа, гарантия, стропильная система, под ключ, договор, услуги, строительство, ремонт, рассрочка' 
        },
        {
          name: 'description',
          content: 'ПРОФЕССИОНАЛЬНЫЕ КРОВЕЛЬНЫЕ РАБОТЫ В ГОМЕЛЕ И ГОМЕЛЬСКОЙ ОБЛАСТИ. Выполненные кровельных работ без предоплаты, с гарантией, опытные специалисты. Продажа материалов для любой кровли. Выезд специалиста на замер и консультация - бесплатно'
        },
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge'},
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/logo.png' }],
      noscript: [
        { textContent: "Сожалеем, но теремок-кровля не работает должным образом без включенного JavaScript. Пожалуйста, активируйте для продолжения." }
      ]
    }
  }
});