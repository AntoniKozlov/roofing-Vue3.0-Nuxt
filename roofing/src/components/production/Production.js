import { chunk } from 'lodash';

import productionList from '../../consts/productionList';
import relatedProducts from '../../consts/relatedProducts';


export default {
    name: 'Production',
    data() {
        return {
            productionList,
            newRelatedProducts: Array
        };
    },
    created () {

        this.newRelatedProducts = chunk(relatedProducts, 3);
        window.addEventListener('scroll', this.onScroll);
    },
}
