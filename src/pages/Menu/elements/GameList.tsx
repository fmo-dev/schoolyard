import { ReactElement } from 'react'
import { AllGames, Game } from '../../../games';

export const GameList: React.FC<{
    selectGame: (game: Game) => void
}> = (props): ReactElement => {

    return (
        <ul id="game_list">
            {AllGames.map((game, i) => {
                return <li key={i} className="game_element" onClick={() => props.selectGame(game)}>{game.name}</li>
            })}
        </ul>
    );
}