import { ReactElement } from 'react'
import { Route, Routes } from 'react-router';
import { AllGames } from './games';
import { Menu } from './pages/Menu/Menu';

export const RoutingComponent: React.FC = (): ReactElement => {
    return (
        <Routes>
            <Route path="/" element={<Menu />} />
            {AllGames.map(game => <Route path={game.path} key={game.path} element={<game.game />} />)}
            {AllGames.map(game => <Route path={game.path + '/:code'} key={game.path + '/:code'} element={<game.game />} />)}
        </Routes>
    );
}