export default function (app) {
    function moveScrollTo(e, targetId) {
        e.preventDefault();
        
        const $targetElement = document.getElementById(targetId);
        const coord = $targetElement.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: coord,
            behavior: "smooth",
        });
    }

    app.directive('scroll-to', {
        mounted(el, binding) {
            el.addEventListener('click', (e) => moveScrollTo(e, binding.value));
        },
        unmounted(el) {
            el.removeEventListener('click', moveScrollTo);
        },
    });
}