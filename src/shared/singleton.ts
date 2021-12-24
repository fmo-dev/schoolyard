export class Singleton {
    
    private static _instance: Singleton;

    public static get(): Singleton {
        if (!this._instance) {
            this._instance = new this();
        }
        return this._instance;
    }
}