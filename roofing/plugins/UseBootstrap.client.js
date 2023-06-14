import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'

export default defineNuxtPlugin(({vueApp}) => {
    vueApp.provide('bootstrap', bootstrap);
});