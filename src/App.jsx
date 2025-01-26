import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import { ThemeContext, UserContext } from './contexts';
import CONSTANTS from './constants';
import HomePage from './pages/HomePage';
import QuizPage from './pages/QuizPage';
import ShopPage from './pages/ShopPage';
import ProfilePage from './pages/ProfilePage';
import NotFoundPage from './pages/NotFoundPage';
import ProfileInfo from './components/Profile/ProfileInfo';
import ProfileSettings from './components/Profile/ProfileSettings';
import RegisterForm from './components/forms/RegisterForm';
import LoginForm from './components/forms/LoginForm';

function App() {
  const [theme, setTheme] = useState(CONSTANTS.THEME.LIGHT);
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <UserContext.Provider value={{user, setUser}}>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <Header />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/quiz' element={<QuizPage />} />
            <Route path='/shop' element={<ShopPage />} />
            <Route path='/profile' element={<ProfilePage />}>
              <Route path='info' element={<ProfileInfo />} />
              <Route path='settings' element={<ProfileSettings />} />
            </Route>
            <Route path='/register' element={<RegisterForm />} />
            <Route path='/login' element={<LoginForm/>} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </ThemeContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
