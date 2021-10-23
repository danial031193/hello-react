import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { Navbar } from '@components/index';
import { ThemeProvider } from '@context/ThemeContext';
import SiteRoutes from './router';
import styles from './styles.module.scss';

const App = () => {
  const accountId = useSelector((state) => state.account.id);

  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
};

export default App;
