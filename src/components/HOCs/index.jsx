import { useContext } from 'react';
import { ThemeContext } from '../../contexts/index';

export const withTheme = (InnerComponent) => {
    return function InnerComponentWithTheme(props) {
        const { theme, setTheme } = useContext(ThemeContext);
        return <InnerComponent theme={theme} setTheme={setTheme} {...props} />
    }
}