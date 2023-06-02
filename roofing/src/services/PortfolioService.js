import db from '../firebase/init.js'
import { ref, listAll } from "firebase/storage"

async function getPortfolioUrlsByPath(path) {
    const bitumenRefs = ref(db, path);
   // const portfolioUrls = [];
    const listUrls = await listAll(bitumenRefs);

    return listUrls;
    // let requests = listUrls.items.map(image => getDownloadURL(image));
    // return Promise.allSettled(requests).then(resUrl => {
    //     //console.log(resUrl)
    //     //portfolioUrls.push(resUrl)
    //     return resUrl;
    // })
}

export {
    getPortfolioUrlsByPath
}