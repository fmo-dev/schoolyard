import React, { ReactElement, useEffect, useState } from "react";
import { RoomMenu } from "./RoomMenu";
import { SocketContext, socket } from '../context/socket';
import { SocketService } from "../shared/Socket";
import { Room } from "../shared/entities/Room";
import './game.scss';
import { Link } from "react-router-dom";

export const GameContainer: React.FC<{ game: React.FC }> = ({ game }): ReactElement => {
    const [room, setRoom] = useState<Room>();
    const [started,] = useState<boolean>(false);
    const [error, setError] = useState<string>();

    const updateRoom = (room: Room) => {
        const roomError = Room.HandleError(room.name);
        if (roomError) setError(roomError)
        else {
            const baseUrl = window.location.origin + window.location.pathname;
            window.history.replaceState({}, '', `${baseUrl}?room=${room.name}`);
            setRoom(new Room(room))
        }
    };

    useEffect(() => {
        if (room) {
            socket.once(`roomUpdated_${room.name}`, updateRoom);
        }
    }, [room])

    useEffect(() => {
        const roomName = new URLSearchParams(window.location.search).get('room');
        roomName ? joinRoom(roomName) : createRoom();
    }, [])

    function createRoom(): void {
        SocketService.createRoom().then(updateRoom);
    }

    function joinRoom(roomName: string): void {
        SocketService.joinRoom(roomName).then(updateRoom);
    }

    return (
        <SocketContext.Provider value={socket}>
            <div>
                {!started && room && <RoomMenu game={game} room={room} />}
            </div>
            {error && <div className="panel_container">
                <div id="error_panel" className="panel">
                    <h4>{error}</h4>
                    <Link to="/"><button>OK</button></Link>
                </div>
            </div>}
        </SocketContext.Provider>
    );
}