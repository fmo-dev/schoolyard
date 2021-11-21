class State {
    private static _instance: State;
    private _username: string;

    private constructor() {
        let username = document.cookie;
        if (!username) {
            username = 'Player_' + this._generateNumber();
            document.cookie = username;
        }
        this._username = username;
    }


    public set username(value: string) {
        this._username = value;
        document.cookie = value;
    }

    get username(): string {
        return this._username
    }

    private _generateNumber(): number {
        return Math.floor(Math.random() * (99999 - 10000 + 1)) + 100000;
    }

    public static get(): State {
        if (!this._instance) {
            this._instance = new State();
        }
        return this._instance;
    }
}

export const LocalState = State.get();