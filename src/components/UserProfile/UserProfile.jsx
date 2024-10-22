import PropTypes from 'prop-types';
import { useState } from 'react';
import Icon from '@mdi/react';
import { mdiThumbUp, mdiThumbDown } from '@mdi/js';
import styles from './UserProfile.module.css'

const UserProfile = (props) => {
    const { user: { name = "Anonim", age = "0", email = "anonim@gmail.com" } } = props;
    const [isSelect, setIsSelect] = useState(false);
    const [amount, setAmount] = useState(10);
    const [isDelete, setIsDelete] = useState(false);
    const borderSelect = isSelect ? '4px solid blue' : '4px solid gray';
    const changeIsSelect = () => { setIsSelect(!isSelect) };
    const addLike = (event) => {
        event.stopPropagation();
        setAmount(amount + 1)
    };
    const subLike = (event) => {
        event.stopPropagation();
        if (amount > 0) {
            setAmount(amount - 1);
        } else {
            setAmount(0);
        };
    };
    const changeIsDelete = () => {
        setIsDelete(true);
    };
    if (isDelete) return null;
    return (
        <article onClick={changeIsSelect} className={styles['user-profile']} style={{ border: borderSelect }}>
            <button onClick={changeIsDelete}>X</button>
            <h2>name: {name}</h2>
            <h3>age: {age}</h3>
            <p>email: {email}</p>
            <p className={styles.flex}>
                <span onClick={addLike}><Icon path={mdiThumbUp} size={1}/></span>
                <span className={styles.amount}>{amount}</span>
                <span onClick={subLike}><Icon path={mdiThumbDown} size={1}/></span>
            </p>
        </article>
    );
}

UserProfile.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        email: PropTypes.string.isRequired
    })
}
export default UserProfile;
