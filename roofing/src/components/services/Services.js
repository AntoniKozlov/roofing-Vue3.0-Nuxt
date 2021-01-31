export default {
    name: 'Services',
    data() {
        return {
            isAppear: false,
            isHidden: true
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
            if (window.scrollY >= 100) {
                this.isAppear = true;
                this.isHidden = false;
            }
        }
    }
}
