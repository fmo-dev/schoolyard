import { ReactElement } from 'react'
import { Route, Routes } from 'react-router';
import { AllGames } from './games';
import { GameContainer } from './games/GameContainer';
import { Menu } from './pages/Menu/Menu';

export const RoutingComponent: React.FC = (): ReactElement => {
    return (
        <Routes>
            <Route path="/" element={<Menu />} />
            {AllGames.map(game => <Route path={game.path} key={game.path} element={<GameContainer game={game.game} />} />)}
        </Routes>
    );
}