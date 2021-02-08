import productionList from '../../consts/productionList';
import relatedProducts from '../../consts/relatedProducts';

export default {
    name: 'Production',
    data() {
        return {
            productionList,
            relatedProducts
        };
    },
    created() {
        window.addEventListener('scroll', this.onScroll);
    },
}
