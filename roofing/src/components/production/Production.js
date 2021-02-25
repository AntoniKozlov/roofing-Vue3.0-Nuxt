import productionList from '../../consts/productionList';
import relatedProducts from '../../consts/relatedProducts';
import { Slider, SliderItem } from "vue-easy-slider";

export default {
    name: 'Production',
    components: {
        Slider,
        SliderItem
    },
    data() {
        return {
            productionList,
            relatedProducts,
            sliderValue: 2
        };
    },
    methods: {
        changeIndex(index) {
            this.sliderValue = index;
        }
    }
}
