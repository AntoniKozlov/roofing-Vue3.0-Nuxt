import workPlan from '../../consts/workPlan';

export default {
    name: 'WorkPlanSection',
    data() {
        return {
            isAppearWorkPlan: false,
            isHiddenWorkPlan: true,
            workPlan
        };
    },
    created() {
        document.addEventListener('scroll', this.onScroll);
    },
    unmounted() {
        document.removeEventListener('scroll', this.onScroll);
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
