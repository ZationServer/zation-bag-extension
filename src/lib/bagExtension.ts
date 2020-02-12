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
     * A function that can be used as a constructor of this extension.
     * The init function is called before the properties are added to the Bag and RequestBag.
     */
    init?: () => Promise<void> | void;
    /**
     * Define all properties that should be added to the Bag.
     * Notice that the RequestBag extends the Bag.
     * This means that the properties are also accessible from the RequestBag.
     * Only use free property names and don't conflict with other extensions.
     * The Zation server will check it,
     * and when there is a conflict, the server won't start.
     */
    bag?: Record<string,any>;
    /**
     * Define all properties that should be added to the RequestBag.
     * Only use free property names and don't conflict with other extensions.
     * The Zation server will check it,
     * and when there is a conflict, the server won't start.
     */
    requestBag?: Record<string,any>;
}