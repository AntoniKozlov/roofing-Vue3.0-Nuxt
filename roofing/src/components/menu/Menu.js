export default {
    name: 'Menu',
    data() {
        return {
            isStartStyle: true,
            isScrollOn: false
        };
    },
    created () {
        window.addEventListener('scroll', this.onScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.onScroll);
    },
    methods: {
        onScroll() {
            if (window.scrollY >= 10) {
                this.isStartStyle = false;
                this.isScrollOn = true;
            } else {
                this.isStartStyle = true;
                this.isScrollOn = false;
            }
        }
    }
}
