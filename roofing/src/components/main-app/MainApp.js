import Menu from '../menu/Menu.vue'
import Contacts from '../contacts/Contacts.vue';
import Portfolio from '../portfolio/Portfolio.vue';
import Services from '../services/Services.vue';
import Production from '../production/Production.vue';
import WorkPlan from '../work-plan/WorkPlan.vue';
import ScrollAppear from '../../shared/ScrollAppear';


export default {
    name: 'MainApp',
    mixins: [ScrollAppear],
    components: {
        Menu,
        Contacts,
        Portfolio,
        Services,
        Production,
        WorkPlan,
    }
}
