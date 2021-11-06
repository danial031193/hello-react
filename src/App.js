import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@context/ThemeContext';
import SiteRoutes from './router';
import styles from './styles.module.scss';

const App = () => {
  return (
    <ThemeProvider>
      <div className={styles.app}>
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
    </ThemeProvider>
  );
};

export default App;
