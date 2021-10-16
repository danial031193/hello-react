import React, { useCallback, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import ThemeContext from './context/ThemeContext';
import SiteRoutes from './router';
import styles from './styles.module.scss';

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = useCallback(() => setTheme(theme === 'light' ? 'dark' : 'light'), [theme]);

  const themeContextValue = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  const accountId = useSelector((state) => state.account.id);

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <div className={styles.app}>
        {accountId && <Navbar />}

        <div className={styles.body}>
          <Switch>
            {SiteRoutes.getList().map((item) => (
              <Route
                key={`${item.path}`}
                exact={item?.exact ?? true}
                path={item.path}
                component={item.component}
              />
            ))}
          </Switch>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
