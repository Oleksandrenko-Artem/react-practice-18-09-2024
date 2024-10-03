import UserProfile from '../UserProfile/UserProfile';
import data from './data';
import styles from './UsersSection.module.css';

const UserSection = () => {
    const showUser = (user) => (<UserProfile key={user.id} user={user}/>)
    return (
        <>
        <h2>Users</h2>
        <section className={styles.container}>{data.map(showUser)}</section>
        </>
    );
}

export default UserSection;
