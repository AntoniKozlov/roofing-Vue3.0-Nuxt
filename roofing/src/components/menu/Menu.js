import $ from "jquery";

$('body').on('mouseenter mouseleave', '.nav-item', function (e) {
    if ($(window).width() > 750) {
        var _d = $(e.target).closest('.nav-item');
        _d.addClass('show');
        setTimeout(function () {
            _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
        }, 1);
    }
});

export default {
    name: 'Menu',
    data() {
        return {
            isStartStyle: true,
            isScrollOn: false
        };
    },
    created() {
        window.addEventListener('scroll', this.onScroll);
    },
    destroyed() {
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
