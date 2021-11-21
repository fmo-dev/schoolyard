import { ReactElement, useState } from "react";
import { Game } from "../../games";
import { GameList } from "./elements/GameList";
import { GameRulesPanel } from "./elements/GameRulesPanel";
import { Title } from "./elements/Title";
import { Username } from "./elements/Username";
import './Menu.scss';

export const Menu: React.FC = (): ReactElement => {
    const [selectedGame, setselectedGame] = useState<Game | undefined>(undefined);

    function selectGame(game: Game): void {
        setselectedGame(game);
    }

    return (
        <>
            <div id="menu_container" >
                <header id="menu_header">
                    <Title />
                    <Username />
                </header>
                <section id="menu_body">
                    <div id="menu_card">
                        <h2 id="menu_card_title">Games</h2>
                        <GameList {...{ selectGame }}></GameList>
                    </div>
                </section>
            </div>
            {selectedGame && <GameRulesPanel game={selectedGame} close={()=>setselectedGame(undefined)} />}
        </>
    );
}