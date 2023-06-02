// import bitumenList from '../../consts/portfolio-categories/bitumen';
// import foldList from '../../consts/portfolio-categories/fold';
// import mountingList from '../../consts/portfolio-categories/mounting';
// import metalTileList from '../../consts/portfolio-categories/metalTile';

// import { collection } from "firebase/firestore"
import { getPortfolioUrlsByPath } from "../../services/PortfolioService";
import { getDownloadURL } from "firebase/storage"
import Vue from 'vue';

export default {
    name: 'Portfolio',
    data() {
        console.log('sds')
        // const colRef = collection(db, 'roofing')
        // console.log('colRef: ', colRef);
    
        return {
            selectedIndex: 0,
            src: '',
            isShow: false,
            arrayPortfolio: [
                {name: "Битумная черепица", list: [], path: "portfolio/bitumen"},
                {name: "Фальцевая кровля", list: [], path: "portfolio/fold"},
                {name: "Процесс монтажа", list: [], path: "portfolio/mounting"},
                {name: "Металлочерепица", list: [], path: "portfolio/metalTile"}]
        };
    },
    mounted() {
        this.getPortfolioUrlsByPath(this.arrayPortfolio[0].path);
    },
    methods:{
        changeActive: function (selectedList) {
            this.selectedIndex = selectedList;
        },
        showDialog: function (src) {
            this.src = src;
            this.isShow = true;
        },
        closeDialog: function () {
            this.src = '';
            this.isShow = false;
        },
        getPortfolioUrlsByPath(path) {
            console.time()
            var vm = this;
            getPortfolioUrlsByPath(path).then(res => {
                console.log(res)
              
                console.timeEnd()
                console.log(res.items)
              //  this.arrayPortfolio[0] = res.items
               // Vue.set(this, "arrayPortfolio", res.items);
            //    vm.arrayPortfolio.$set(0, res.items)
                console.log(vm.arrayPortfolio[0])
                const images = res.items.map(image => getDownloadURL(image));
                res.items.forEach(image => {
                    getDownloadURL(image).then(res => {
                        images.push(res);
                        Vue.set(vm.arrayPortfolio[0], 'list', images)
                    });
                 
                });
              
                //Vue.set(vm.arrayPortfolio[0], 'list', images)
            });
        },
        getDownloadURLMethod: async function (image) {
            const res = await getDownloadURL(image);
            console.log(res);
            return res;
        }
    }
}
