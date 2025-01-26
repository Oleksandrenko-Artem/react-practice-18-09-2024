import { NavLink, Outlet } from "react-router-dom";
import styles from './ProfilePage.module.css';

const ProfilePage = () => {
    return (
        <section>
            <nav>
                <ul className={styles.profilePage}>
                    <li><NavLink to='/profile/info'>info</NavLink></li>
                    <li><NavLink to='/profile/settings'>settings</NavLink></li>
                </ul>
            </nav>
            <Outlet/>
        </section>
    );
}

export default ProfilePage;
