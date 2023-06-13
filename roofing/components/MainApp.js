import Menu from './menu/MenuSection.vue'
import ContactsSection from './contacts-section/ContactsSection.vue';
import PortfolioSection from './portfolio-section/PortfolioSection.vue';
import ServicesSection from './services-section/ServicesSection.vue';
import ProductionSection from './production-section/ProductionSection.vue';
import WorkPlanSection from './work-plan/WorkPlan.vue';
import ScrollIndicator from './../shared/scroll-indicator/ScrollIndicator.vue';
import ScrollAppear from './../shared/ScrollAppear';




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
        ScrollIndicator
    }
}
