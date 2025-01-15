import { useContext } from 'react';
import Icon from '@mdi/react';
import { mdiWhiteBalanceSunny, mdiMoonWaningCrescent } from '@mdi/js';
import { ThemeContext } from '../../contexts/index';
import CONSTANTS from './../../constants';

const Header = () => {
    const {theme, setTheme} = useContext(ThemeContext);
    const changeTheme = () => { setTheme(theme === CONSTANTS.THEME.LIGHT ? CONSTANTS.THEME.DARK : CONSTANTS.THEME.LIGHT) };
    return (
        <header>
            <button onClick={changeTheme}>{theme === CONSTANTS.THEME.LIGHT ? <Icon path={mdiMoonWaningCrescent} size={1}/> : <Icon path={mdiWhiteBalanceSunny} size={1}/>}</button>
        </header>
    );
}

export default Header;
