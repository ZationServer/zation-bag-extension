/*
Author: Ing. Luca Gian Scaringella
GitHub: LucaCode
Copyright(c) Ing. Luca Gian Scaringella
 */

export default interface BagExtension {
    /**
     * The name of the bag extension.
     */
    name: string;
    /**
     * A function that can be used as a constructor of this extension.
     * The init function is called before the properties are added to the Bag.
     */
    init?: () => Promise<void> | void;
    /**
     * Defines all properties that should be added to the Bag.
     * Only use free property names and don't conflict with other extensions.
     * The Zation server will check it,
     * and when there is a conflict, the server won't start.
     */
    properties: Record<string,any>;
}