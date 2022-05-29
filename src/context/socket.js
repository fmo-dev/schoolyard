import { createContext } from 'react';
import environment from '../environments/environment.json';
import * as io from 'socket.io-client';
import { SocketService } from '../shared/Socket';

export const socket = io.connect(environment.apiUrl );
export const SocketContext = createContext();

socket.on("msgToClient", data => console.log(data))

socket.on("onInit", SocketService.updateUsername);