import { ReactElement, useState } from 'react'
import { Link } from 'react-router-dom';
import { Game } from '../../../games';

export const GameRulesPanel: React.FC<{ game: Game, close: () => void }> = (props): ReactElement => {
    let enterPrivateRoom = false;
    const [roomCode, setroomCode] = useState('')

    const changeCode: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
        setroomCode(event.currentTarget.value);
    }

    const onKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
        if (event.key === 'Enter') {
            const element = document.getElementById('join_private_room');
            element?.click();
        }
    }

    return (
        <div className="panel_container" onClick={props.close} style={{zIndex: 1}}>
            <div id="game_rules_panel" className="panel" onClick={(event) => event.stopPropagation()}>
                <div className="close" onClick={props.close}></div>
                <section id="game_info" className="panel_info" style={style.marginBottom}>
                    <h1>{props.game.name}</h1>
                    <p>{props.game.description}</p>
                    <div id="game_rules">
                        <p>Number of players: {props.game.rules.minPlayer} {
                                props.game.rules.maxPlayer && <span>- {props.game.rules.maxPlayer}</span>
                            } </p>
                    </div>
                </section>
                <section id="select_room" style={style.select}>
                    <Link to={props.game.path}> <button>Create a room</button></Link>
                    {
                        enterPrivateRoom ?
                            <button onClick={() => enterPrivateRoom = true}>Join a private room</button>
                            :
                            <div id="private_room">
                                <h2>Or join a private room</h2>
                                <div id="private_room_input" >
                                    <input maxLength={4} type="text" onKeyUp={changeCode} onKeyDown={onKeyDown} />
                                    <Link to={`${props.game.path}?room=${roomCode}`}><button disabled={roomCode.length < 4} id="join_private_room"></button></Link>
                                </div>
                            </div>
                    }
                </section>
            </div>
        </div>
    );
}

const style: { [key: string]: React.CSSProperties } = {
    info: {
        marginBottom: 10
    },
    select: {
        display: 'flex',
        marginTop: 50,
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: 20,
        justifyContent: 'space-between'

    }
}