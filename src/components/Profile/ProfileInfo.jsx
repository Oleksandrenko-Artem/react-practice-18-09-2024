import { useContext } from 'react';
import { UserAccountContext } from '../../contexts';

const ProfileInfo = () => {
    const user = useContext(UserAccountContext);
    return (
        <article>
            <h2>User information</h2>
            <p>first name: {user.firstName}</p>
            <p>last name: {user.lastName}</p>
        </article>
    );
}

export default ProfileInfo;
