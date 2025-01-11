import { useState } from 'react';
import HomePage from './pages/HomePage';
import Header from './components/Header/Header';
import { ThemeContext } from './contexts';

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <Header />
      <HomePage />
    </ThemeContext.Provider>
  );
}

export default App;
