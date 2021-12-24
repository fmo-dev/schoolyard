import React, { ReactElement, useEffect, useState } from "react";
import { Game } from ".";


export const GameContainer: React.FC<{ game: React.FC }> = (props): ReactElement => {
    const [currentRoom, setroom] = useState<string>();

    useEffect(() => {
        const room = new URLSearchParams(window.location.search).get('room');
        room ? setroom(room) : createRoom();
    }, [])
    

    // useEffect(() => {
    //     if (room) {
            
    //     }
    // }, [room])

    function createRoom(): void {
        
    }

    

    return (
        <div>

        </div>
    );
}