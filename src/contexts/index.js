import { createContext } from 'react';

export const ThemeContext = createContext();

const userAccount = {
    firstName: 'Brad',
    lastName: 'Pitt',
}

export const UserAccountContext = createContext(userAccount);