import { Players } from "./Players";

export class Room {
    public name: string;
    public readonly players: Players;

    constructor(room: Room) {
        this.name = room.name;
        this.players = new Players(room.players);
    }
    
    static HandleError(error: string): string | void {
        switch (error) {
            case "NO_ROOM_AVAILABLE": return "No more room available, try again later.";
            case "DOESN_T_EXIST": return "This room doesn't exist.";
        }
    }

}