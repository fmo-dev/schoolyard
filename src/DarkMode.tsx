import { ReactElement } from 'react'

export const DarkMode: React.FC<{
    darkMode: boolean,
    setdarkMode: React.Dispatch<React.SetStateAction<boolean>>
}> = (props): ReactElement => {

    function changeDarkMode(): void {
        props.setdarkMode(!props.darkMode);
    }

    return (
        <div id="dark_mode_switch_container" onClick={changeDarkMode}>
            <span style={{ opacity: props.darkMode ? 0 : 1, color: '#EEE' }}>Dark Mode</span>
            <div id="dark_mode_switch" className={props.darkMode ? 'active' : 'default'} ></div>
        </div>
    );
}