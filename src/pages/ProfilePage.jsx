import { NavLink, Outlet } from "react-router-dom";

const ProfilePage = () => {
    return (
        <section>
            <nav>
                <ul>
                    <li><NavLink to='/profile/info'>info</NavLink></li>
                    <li><NavLink to='/profile/settings'>settings</NavLink></li>
                </ul>
            </nav>
            <Outlet/>
        </section>
    );
}

export default ProfilePage;
