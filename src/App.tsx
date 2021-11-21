import { ReactElement, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { DarkMode } from './DarkMode';
import { GameRoutes } from './games/GameRoutes';
import { Menu } from './pages/Menu/Menu';
import { BrowserRouter as Router } from 'react-router-dom'

export const App: React.FC = (): ReactElement => {
  const [darkMode, setdarkMode] = useState(false)

  return (
    <Router>
      <div id="schoolyard" className={darkMode ? 'dark_mode' : 'light_mode'}  {...{ style }}>
        <DarkMode {...{ darkMode, setdarkMode }} />
        <section id="main_container">

          <GameRoutes />
          <Routes>
            <Route path="/" element={<Menu />} />
          </Routes>


        </section>
      </div>
    </Router>
  );
}

export default App;


const style: React.CSSProperties = {
  fontFamily: 'Ubuntu'
}