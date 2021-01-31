import Menu from '../menu/Menu.vue'
import Contacts from '../contacts/Contacts.vue';
import Portfolio from '../portfolio/Portfolio.vue';
import Services from '../services/Services.vue';



export default {
    name: 'MainApp',
    props: {
        msg: String
    },
    components: {
        Menu,
        Contacts,
        Portfolio,
        Services
    }
}
