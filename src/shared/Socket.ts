import { Singleton } from "./singleton";

export class SocketService extends Singleton {
    createRoom(): void {

    }
}

export const Socket = SocketService.get() as SocketService;