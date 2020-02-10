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
     * Extension options for the Bag.
     * Notice that the RequestBag extends the Bag.
     * This means that this extension options are also used for the RequestBag.
     */
    bag?: ExtensionOptions;
    /**
     * Extension options for the RequestBag.
     */
    requestBag?: ExtensionOptions;
}

export interface ExtensionOptions {
    /**
     * A function that can be used to prepare stuff for the added properties.
     * The init function is called before the user can use the Bag or RequestBag.
     * This references to the RequestBag or Bag.
     *
     * Notice that the RequestBag will be created for every request.
     * In this case, the function is also called for every request.
     * That means the init function on the RequestBag is much more expensive than on the Bag.
     */
    init?: (this: any) => Promise<void> | void;
    /**
     * Define all properties that should be added to the target.
     * Notice that you only use free property names and
     * don't conflict with other extensions.
     * The Zation server will check it,
     * and when there is a conflict, the server won't start.
     */
    properties: Record<string,any>;
}