/*
Author: Luca Scaringella
GitHub: LucaCode
©Copyright by Luca Scaringella
 */

export default interface BagExtension {
    /**
     * The name of the bag extension.
     */
    name: string;
    /**
     * All extensions for the Bag.
     * Notice that the RequestBag extends the Bag.
     */
    bag?: Record<string,any>;
    /**
     * All extensions for the RequestBag.
     */
    requestBag?: Record<string,any>;
}