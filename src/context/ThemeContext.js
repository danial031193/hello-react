import React, { useCallback, useMemo, useState } from 'react';

const initState = {
  theme: 'light',
  toggleTheme: () => null,
};

const ThemeContext = React.createContext(initState);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = useCallback(() => setTheme(theme === 'light' ? 'dark' : 'light'), [theme]);

  const themeContextValue = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return <ThemeContext.Provider value={themeContextValue} children={children} />;
};

export default ThemeContext;
