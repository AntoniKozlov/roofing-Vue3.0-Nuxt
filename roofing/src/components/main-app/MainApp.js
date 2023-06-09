import Menu from '../menu/MenuSection.vue'
import ContactsSection from '../contacts/ContactsSection.vue';
import PortfolioSection from '../portfolio/PortfolioSection.vue';
import ServicesSection from '../services/ServicesSection.vue';
import ProductionSection from '../production/ProductionSection.vue';
import WorkPlanSection from '../work-plan/WorkPlan.vue';
import ScrollAppear from '../../shared/ScrollAppear';


export default {
    name: 'MainApp',
    mixins: [ScrollAppear],
    components: {
        Menu,
        ContactsSection,
        PortfolioSection,
        ServicesSection,
        ProductionSection,
        WorkPlanSection,
    }
}
