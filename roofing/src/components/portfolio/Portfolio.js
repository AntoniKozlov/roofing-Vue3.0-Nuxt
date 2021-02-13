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
                {name: "Битумная черепица", list: bitumenList},
                {name: "Фальцевая кровля", list: foldList},
                {name: "Процесс монтажа", list: mountingList},
                {name: "Металлочерепица", list: metalTileList}]
        };
    },
    methods:{
        changeActive: function (selectedList) {
            this.selectedIndex = selectedList;
        },
        showDialog: function (src) {
            console.log(src);
            this.src = src;
            this.isShow = true;
        },
        closeDialog: function () {
            this.src = '';
            this.isShow = false;
        }
    }
}
