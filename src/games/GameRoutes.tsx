import { ReactElement } from 'react'
import { Route, Routes } from 'react-router';
import { AllGames } from '.';

export const GameRoutes: React.FC = (): ReactElement => {
    return (
        <Routes>
            {AllGames.map(game =>
                <>
                    <Route path={game.path} element={<game.game />} />
                    <Route path={game.path + '/:code'} element={<game.game />} />
                </>)}
        </Routes>
    );
}