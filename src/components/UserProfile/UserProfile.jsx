import './UserProfile.css'
const UserProfile = (props) => {
    const {name="Anonim", age="0", email="anonim@gmail.com"} = props;
    return (
        <article className="user-profile">
            <h2>name: {name}</h2>
            <h3>age: {age}</h3>
            <p>email: {email}</p>
        </article>
    );
}

export default UserProfile;
