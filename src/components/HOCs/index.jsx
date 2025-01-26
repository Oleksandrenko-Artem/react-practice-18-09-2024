import { useContext } from 'react';
import { ThemeContext, UserAccountContext, UserContext } from '../../contexts/index';

export const withTheme = (InnerComponent) => {
    return function InnerComponentWithTheme(props) {
        const { theme, setTheme } = useContext(ThemeContext);
        return <InnerComponent theme={theme} setTheme={setTheme} {...props} />;
    };
};

export const withUserAccount = (InnerComponent) => {
    return function InnerComponentWithUserAccount(props) {
        const user = useContext(UserAccountContext);
        return <InnerComponent user={user} {...props} />;
    };
};

export const withUserAuth = (InnerComponent) => {
    return function InnerComponentWithUserAuth(props) {
        const { user, setUser } = useContext(UserContext);
        return <InnerComponent user={user} setUser={setUser} {...props} />;
    };
};