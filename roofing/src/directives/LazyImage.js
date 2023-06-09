const app = Vue.createApp({})

app.directive('lazy', {
    beforeMount(el, binding) {
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
})