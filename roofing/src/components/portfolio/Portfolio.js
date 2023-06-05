// import bitumenList from '../../consts/portfolio-categories/bitumen';
// import foldList from '../../consts/portfolio-categories/fold';
// import mountingList from '../../consts/portfolio-categories/mounting';
// import metalTileList from '../../consts/portfolio-categories/metalTile';

import { getPortfolioUrlsByPath, getDownloadURLMethod } from "../../services/PortfolioService";
import Vue from 'vue';

export default {
    name: 'Portfolio',
    data() {
        return {
            selectedIndex: 0,
            src: '',
            isShow: false,
            arrayPortfolio: [
                {name: "Битумная черепица", list: [], path: "portfolio/bitumen", isLoaded: false},
                {name: "Фальцевая кровля", list: [], path: "portfolio/fold", isLoaded: false},
                {name: "Процесс монтажа", list: [], path: "portfolio/mounting", isLoaded: false},
                {name: "Металлочерепица", list: [], path: "portfolio/metal-tile", isLoaded: false}
            ]
        };
    },
    mounted() {
        this.getPortfolioUrlsByPath(this.arrayPortfolio[0]);
    },
    methods:{
        changeActive(selectedListIndex) {
            this.selectedIndex = selectedListIndex;
            this.getPortfolioUrlsByPath(this.arrayPortfolio[selectedListIndex]);
        },
        showDialog(src) {
            this.src = src;
            this.isShow = true;
        },
        closeDialog() {
            this.src = '';
            this.isShow = false;
        },
        async getPortfolioUrlsByPath(arrayPortfolio) {
            if (arrayPortfolio.isLoaded) return;

            await getPortfolioUrlsByPath(arrayPortfolio.path).then(res => {
                const images = [];
                res.items.forEach(image => {
                    getDownloadURLMethod(image).then(res => {
                        images.push(res);
                        Vue.set(arrayPortfolio, 'list', images);
                    }).catch(e => {
                        console.error(e);
                    });
                });
            }).catch(e => {
                console.error(e);
            });
            arrayPortfolio.isLoaded = true;
        },
    }
}
