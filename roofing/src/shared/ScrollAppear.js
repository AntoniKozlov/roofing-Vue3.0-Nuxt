
export default {
    name: 'ScrollAppear',
    data() {
        return {
            fadeInElements: [],
            progress: "0%"
        };
    },
    mounted() {
        this.fadeInElements = Array.from(document.getElementsByClassName('fade-in'));
        document.addEventListener('scroll', this.handleScroll);
        this.handleScroll();
    },

    unmounted() {
        document.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            for (let i = 0; i < this.fadeInElements.length; i++) {
                let elem = this.fadeInElements[i]
                if (this.isElemVisible(elem)) {
                    elem.style.visibility = 'visible';
                    elem.style.transform = 'scale(1)';
                    // elem.style.transform = 'translate3d(0, -10px, 0)'
                    this.fadeInElements.splice(i, 1); // only allow it to run once
                }
            }

            this.calcProgressPercentage();
        },
        isElemVisible(el) {
            let rect = el.getBoundingClientRect()
            let elemTop = rect.top + 10 // 10 = buffer
            let elemBottom = rect.bottom
            return elemTop < window.innerHeight && elemBottom >= 0
        },
        calcProgressPercentage() {
            const { documentElement, body } = document;
            let windowScroll = body.scrollTop || documentElement.scrollTop;
            let height = documentElement.scrollHeight - documentElement.clientHeight;
            this.progress = (windowScroll / height) * 100 + "%";
        }
    }
}