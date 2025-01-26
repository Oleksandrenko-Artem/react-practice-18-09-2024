import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts';
import styles from './Profile.module.scss';

const ProfileInfo = () => {
    const {user} = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (!user) {
            navigate('/');
        }
    }, [navigate, user]);
    return (
        <article className={styles.caption}>
            <h2>User information</h2>
            <p>First name: <span>{user?.firstName}</span></p>
            <p>Last name: <span>{user?.lastName}</span></p>
            <p>Email: <span>{user?.email}</span></p>
        </article>
    );
}

export default ProfileInfo;
