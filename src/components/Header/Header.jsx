import { useEffect, useState } from 'react';
import Icon from '@mdi/react';
import cx from 'classnames';
import { mdiWhiteBalanceSunny, mdiMoonWaningCrescent, mdiLogoutVariant, mdiAccountPlusOutline } from '@mdi/js';
import { Link, useNavigate } from 'react-router-dom';
import CONSTANTS from './../../constants';
import { withTheme, withUserAuth } from './../HOCs';
import { PropTypes } from 'prop-types';
import styles from './Header.module.scss';
import Menu from './../Menu/Menu';

const Header = (props) => {
    const { theme, setTheme, user, setUser } = props;
    const [isSavedUser, setIsSavedUser ] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            setIsSavedUser(true);
        }
    }, []);
    const changeTheme = () => { setTheme(theme === CONSTANTS.THEME.LIGHT ? CONSTANTS.THEME.DARK : CONSTANTS.THEME.LIGHT) };
    const headerClasses = cx(styles.header, {
        [styles['light']]: theme === CONSTANTS.THEME.LIGHT,
        [styles['dark']]: theme === CONSTANTS.THEME.DARK
    });
    const logOutUser = () => {
        setUser(null);
        navigate('/login');
    };
    return (
        <header className={headerClasses}>
            <Menu/>
            {user ? <p className={styles.welcome}>Hi, {user.firstName} {user.lastName}!<span onClick={logOutUser}><Icon path={mdiLogoutVariant} size={1}/></span></p> : isSavedUser ? <Link to='/login'>log in</Link> :<Link to='/register'>register</Link>}
            <span onClick={changeTheme} className={styles.themeBtn}>{theme === CONSTANTS.THEME.LIGHT ? <Icon path={mdiMoonWaningCrescent} size={1}/> : <Icon path={mdiWhiteBalanceSunny} size={1}/>}</span>
        </header>
    );
}

Header.propTypes = {
    theme: PropTypes.string,
    setTheme: PropTypes.func,
    user: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
    }),
    setUser: PropTypes.func,
}

const HeaderWithHOC = withUserAuth(withTheme(Header));
export default HeaderWithHOC;
