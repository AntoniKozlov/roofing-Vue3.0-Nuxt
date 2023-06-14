export default {
    name: 'MenuSection',
    data() {
        return {
            isStartStyle: true,
            isScrollOn: false
        };
    },
    created() {
        if (typeof document !== 'undefined') { 
            document.addEventListener('scroll', this.onScroll);
        }

    },
    unmounted() {
        if (typeof document !== 'undefined') { 
            document.removeEventListener('scroll', this.onScroll);
        }

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
        },
        onMouseNavItemContacts(e) {
            if (window.innerWidth > 750) {
                const $navItem = e.target;
                $navItem.classList[e.type === 'mouseenter' ? 'add' : 'remove']('show');
            }
        },
    }
}
