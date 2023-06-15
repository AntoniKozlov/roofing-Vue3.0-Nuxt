export default defineNuxtPlugin(({vueApp}) => { 
    function onMouseHandler(e, binding) {
        if (window.innerWidth > 750) {
            const $navItem = e.target;
            $navItem.classList[e.type === 'mouseenter' ? 'add' : 'remove']('show');
        }
    }

    vueApp.directive('section-visibility', {
        mounted(el, binding) {
            el.addEventListener('mouseenter', (e) => onMouseHandler(e, binding));
            el.addEventListener('mouseleave', (e) => onMouseHandler(e, binding));
        },
        unmounted(el) {
            el.removeEventListener('mouseenter', onMouseHandler);
            el.removeEventListener('mouseleave', onMouseHandler);
        },
    });
});