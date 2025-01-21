import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import { ThemeContext } from './contexts';
import CONSTANTS from './constants';
import HomePage from './pages/HomePage';
import QuizPage from './pages/QuizPage';
import ShopPage from './pages/ShopPage';
import ProfilePage from './pages/ProfilePage';
import NotFoundPage from './pages/NotFoundPage';
import ProfileInfo from './components/Profile/ProfileInfo';
import ProfileSettings from './components/Profile/ProfileSettings';

function App() {
  const [theme, setTheme] = useState(CONSTANTS.THEME.LIGHT);
  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/quiz' element={<QuizPage/>} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/profile' element={<ProfilePage />}>
            <Route path='info' element={<ProfileInfo />}/>
            <Route path='settings' element={<ProfileSettings/>} />
          </Route>
          <Route path='*' element={<NotFoundPage/>} />
        </Routes>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
