import { ReactElement } from 'react'
import { Game } from '..';

const TicTacToe: React.FC = (props): ReactElement => {
    return (
        <div></div>
    );
}

const game: Game = {
    name: 'Tic Tac Toe',
    game: TicTacToe,
    rules: {
        maxPlayer: 2,
        minPlayer: 2
    },
    description: `A game in which two players seek in alternate turns to complete a row, a column, or a diagonal 
    with either three O's or three X's drawn in the spaces of a grid of nine squares; noughts and crosse`,
    path: '/tic-tac-toe'
}

export default game