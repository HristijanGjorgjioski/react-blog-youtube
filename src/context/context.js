import React, { createContext, useState } from "react";

import { allBlogs } from '../config/blogs';

const initialState = [];

export const MainContext = createContext(initialState);

export const Provider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme)
    }

    return (
        <MainContext.Provider value={{
            blogs: allBlogs,
            theme,
            toggleTheme,
        }}>
            {children}
        </MainContext.Provider>
    )
}

