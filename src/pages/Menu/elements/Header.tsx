import { ReactElement } from 'react'
import { Title } from './Title';

const Header: React.FC = (): ReactElement => {
    return (
        <header id="menu_header" style={style.header}>
            <Title />
        </header>
    );
}

export default Header

const style: { [key: string]: React.CSSProperties } = {
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        zIndex: 1
    }

}