export default defineNuxtPlugin(({vueApp}) => { 
    function onScroll(el) {
        el.classList[window.scrollY >= 10 ? 'add' : 'remove']('scroll-on');
    }

    vueApp.directive('nav-behavior', {
        mounted(el, binding) {
            document.addEventListener('scroll', (e) => onScroll(el));
        },
        unmounted(el) {
            document.removeEventListener('scroll', onScroll);
        },
    });
});