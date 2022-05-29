import { ChangeEventHandler, ReactElement } from 'react'
import { SocketService } from '../../../shared/Socket';
import { LocalState } from '../../../shared/State';

export const Username: React.FC = (): ReactElement => {

    const changeUsername: ChangeEventHandler<HTMLInputElement> = (event): void => {
        LocalState.username = event.target.value.trim();
        SocketService.updateUsername();
    }

    return (<div style={style.main}>
        <label style={style.label} htmlFor="username_input">Username :</label>
        <input id="username_input" spellCheck={false} type="text" style={style.input} defaultValue={LocalState.username} onChange={changeUsername} />
    </div >);
}

const style: { [key: string]: React.CSSProperties } = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        width: 250,
    },
    label: {
        fontSize: 24,
        marginBottom: 10,
        color: 'white'
    },
    input: {
        border: 'none'
    }
}