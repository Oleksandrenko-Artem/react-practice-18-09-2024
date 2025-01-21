import { NavLink } from "react-router-dom";
import styles from './Menu.module.scss';
import { withTheme } from './../HOCs';

const Menu = () => {
    return (
        <nav className={styles.menu}>
            <ul>
                <li><NavLink to='/'>home</NavLink></li>
                <li><NavLink to='/quiz'>quiz</NavLink></li>
                <li><NavLink to='/shop'>shop</NavLink></li>
                <li><NavLink to='/profile'>profile</NavLink></li>
            </ul> 
        </nav>
    );
}

export default withTheme(Menu);
