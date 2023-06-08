export default function (Vue) {
    Vue.directive('lazy', {
        bind(el, binding) {
            if (/\S+/.test(binding.value)) {
                const observer = new IntersectionObserver(entries => {
                    entries.forEach(entry => {
                        if (entry && entry.isIntersecting) {
                            if (el.tagName == 'IMG') {
                                el.src = binding.value;
                            } else {
                                el.style.backgroundImage = `url("${binding.value}")`;
                            }

                            observer.disconnect();
                        }
                    });
                });

                observer.observe(el);
                el.$lazy = observer;
            }
        },
        beforeUnmount(el) {
            if (el.$lazy) {
                el.$lazy.unobserve(el);
            }
        }
    });
}