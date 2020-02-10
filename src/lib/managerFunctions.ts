/*
Author: Luca Scaringella
GitHub: LucaCode
©Copyright by Luca Scaringella
 */

import BagExtension from "./bagExtension";

export const bagExtensionGlobalKey = '_ZATION_BAG_EXTENSIONS';

export function registerBagExtension(extension: BagExtension) {
    let globalBagExtensions: BagExtension[] | undefined = global[bagExtensionGlobalKey];
    if(!Array.isArray(globalBagExtensions)){
        globalBagExtensions = [];
        global[bagExtensionGlobalKey] = globalBagExtensions;
    }
    if(globalBagExtensions.indexOf(extension) === -1) {
        globalBagExtensions.push(extension);
    }
}

export function getGlobalRegisteredBagExtensions(): BagExtension[] {
    const globalBagExtensions = global[bagExtensionGlobalKey];
    return Array.isArray(globalBagExtensions) ? globalBagExtensions : [];
}