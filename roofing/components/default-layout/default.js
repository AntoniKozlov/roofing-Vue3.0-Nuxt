import ScrollAppear from '../../shared/ScrollAppear';
import ScrollIndicator from '../../shared/scroll-indicator/ScrollIndicator.vue';
import Menu from '../menu/MenuSection.vue'

export default {
    name: 'default',
    mixins: [ScrollAppear],
    components: {
        Menu,
        ScrollIndicator
    }
}