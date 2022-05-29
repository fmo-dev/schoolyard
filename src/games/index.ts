import TicTacToe from "./TicTacToe";

export const AllGames: Game[] = [
    TicTacToe
]

export interface Game   {
    name: string;
    game: React.FC;
    rules: {
        maxPlayer?: number;
        minPlayer: number;
    }
    description: string,
    path: string
}