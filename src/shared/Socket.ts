import { Singleton } from "./singleton";
import { socket } from "../context/socket";
import { LocalState } from "./State";
import { Room } from "./entities/Room";

class SocketServiceClass extends Singleton {

    createRoom(): Promise<Room> {
        return new Promise((res, rej) => {
            socket.emit("createRoom")
            socket.once("roomCreated", (data: Room) => {
                res(data);
            });
        })
    }

    joinRoom(id: string): Promise<Room> {
        return new Promise(res => {
            socket.emit("joinRoom", id.toUpperCase())
            socket.once("roomJoined", (data: Room) => {
                res(data);
            })
        })
    }

    updateUsername() {
        socket.emit("updateUsername", LocalState.username)
    }
}


export const SocketService = SocketServiceClass.get() as SocketServiceClass;

