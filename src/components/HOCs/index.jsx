import { useContext } from 'react';
import { ThemeContext, UserAccountContext } from '../../contexts/index';

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