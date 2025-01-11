import UserProfile from './../components/UserProfile/UserProfile';

const HomePage = () => {
    return (
        <div>
            <UserProfile user={{name: "Anonim", age: 0, email: "anonim@gmail.com"}}/>
        </div>
    );
}

export default HomePage;
