class State {
    private static _instance: State;
    private _username: string;

    private constructor() {
        let username: string;
        let cookies = document.cookie;
        if (!cookies || cookies === 'username=') {
            username = 'Player_' + this._generateNumber();
        }
        else {
            username = cookies.replace('username=', '');
        }
        this._username = username;
    }

    public set username(value: string) {
        const now = new Date();
        now.setFullYear(now.getFullYear() + 1);
        document.cookie = `username=${value};expires=${now.toUTCString()}`;
        console.log(document.cookie);
        
        this._username = value;
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