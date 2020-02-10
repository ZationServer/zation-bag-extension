/*
Author: Luca Scaringella
GitHub: LucaCode
©Copyright by Luca Scaringella
 */

import BagExtension from "./bagExtension";

export const bagExtensionGlobalKey = '_ZATION_BAG_EXTENSIONS';

export function registerBagExtension(extension: BagExtension) {
    let externalBagExtensions = global[bagExtensionGlobalKey];
    if(!Array.isArray(externalBagExtensions)){
        externalBagExtensions = [];
        global[bagExtensionGlobalKey] = externalBagExtensions;
    }
    externalBagExtensions.push(extension);
}