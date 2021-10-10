import React from 'react';

const initState = {
  theme: 'light',
  toggleTheme: () => null,
};

const ThemeContext = React.createContext(initState);

export default ThemeContext;
