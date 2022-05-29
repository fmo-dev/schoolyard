import React, { ReactElement, useEffect, useState } from "react";
import { Room } from "../shared/entities/Room";
import './room.scss';

export const RoomMenu: React.FC<{ game: React.FC, room: Room }> = ({ game, room }): ReactElement => {
    const [linkCopied, setLinkCopied] = useState(false);

    useEffect(() => {
        if (linkCopied) {
            setTimeout(() => setLinkCopied(false), 2000)
        }
    }, [linkCopied])

    const copyInvitationLink = () => {
        const url = window.location.origin + window.location.pathname
        navigator.clipboard.writeText(`${url}?room=${room.name}`)
        setLinkCopied(true);
    }

    return (
        <div id="room_menu_panel_container" className="panel_container">
            <div id="room_menu_panel" className="panel">
                <div id="room_menu_header">
                    <h1>{game.name}</h1>
                    <h2>Room: <span id="room_name">{room.name}</span>
                        {!linkCopied && <a onClick={copyInvitationLink}>(Copy invitation link)</a>}
                        {linkCopied && <span id="link_copied">(link copied)</span>}
                    </h2>
                </div>
                <div id="room_menu_content">
                    <div id="room_menu_player">
                        <h3>Players</h3>
                        <ul>
                            {room.players.map(player => <li key={player.id}>{player.username}</li>)}
                        </ul>
                    </div>
                    <div id="room_menu_rules">
                        <h3>Rules</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}