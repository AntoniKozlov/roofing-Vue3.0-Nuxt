import db from '../firebase/init.js'

import { ref, listAll } from "firebase/storage"
import { getDownloadURL } from "firebase/storage"

async function getPortfolioUrlsByPath(path) {
    const bitumenRefs = ref(db, path);
    const listUrls = await listAll(bitumenRefs);

    return listUrls;
}

function getDownloadURLMethod(image) {
    const res = getDownloadURL(image);
    return res;
}

export {
    getPortfolioUrlsByPath,
    getDownloadURLMethod
}