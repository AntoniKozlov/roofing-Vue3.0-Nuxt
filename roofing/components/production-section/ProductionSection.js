import productionList from '../../consts/productionList';
import relatedProducts from '../../consts/relatedProducts';

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
    name: 'ProductionSection',
    components: {
        Carousel, Slide, Pagination, Navigation
    },
    data() {
        return {
            productionList,
            relatedProducts,
            sliderValue: 1,
        };
    },
}
