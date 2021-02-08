import workPlan from '../../consts/workPlan';

export default {
    name: 'WorkPlan',
    data() {
        return {
            isAppearWorkPlan: false,
            isHiddenWorkPlan: true,
            workPlan
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
            if (window.scrollY >= 1000) {
                this.isAppearWorkPlan = true;
                this.isHiddenWorkPlan = false;
            }
        }
    }
}
