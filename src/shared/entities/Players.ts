import { ReactElement } from "react";
import { Player } from "../types";

export class Players {
    private players: { [key in string]: Player };

    constructor(players: Players) {
        this.players = players as any;
    }

    public map(callback: (player: Player) => ReactElement) {
        return Object.keys(this.players).map(key => {
            return callback(this.players[key]);
        });
    }
}