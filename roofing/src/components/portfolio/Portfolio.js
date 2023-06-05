import bitumenList from '../../consts/portfolio-categories/bitumen';
import foldList from '../../consts/portfolio-categories/fold';
import mountingList from '../../consts/portfolio-categories/mounting';
import metalTileList from '../../consts/portfolio-categories/metalTile';

export default {
    name: 'Portfolio',
    data() {
        return {
            selectedIndex: 0,
            src: '',
            isShow: false,
            arrayPortfolio: [
                {name: "Битумная черепица", list: bitumenList, isLoaded: false},
                {name: "Фальцевая кровля", list: foldList, isLoaded: false},
                {name: "Процесс монтажа", list: mountingList, isLoaded: false},
                {name: "Металлочерепица", list: metalTileList, isLoaded: false}
            ]
        };
    },
    methods:{
        changeActive(selectedListIndex) {
            this.selectedIndex = selectedListIndex;
        },
        showDialog(src) {
            this.src = src;
            this.isShow = true;
        },
        closeDialog() {
            this.src = '';
            this.isShow = false;
        },
    }
}
