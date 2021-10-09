import React, {
  useCallback,
  useMemo,
  useState,
} from 'react'
import Counter from './components/counter'
import ControlledForm from './components/forms/controlled'
import UncontrolledForm from './components/forms/uncontrolled'
import MouseListener from './components/mouse-listener'
import {
  TestAbstract,
  TestClass,
} from './components/test-class'
import TestFuncComponent from './components/test-func-component'
import ThemeSwitcher from './components/theme-switcher'
import Timer from './components/timer'
import UserList from './components/user-list'
import ThemeContext from './context/ThemeContext'
import withButton from './wrappers/withButton'
import styles from './styles.module.scss';

const UserListWithButton = withButton(UserList)

const App = () => {
  const [theme, setTheme] = useState('light')
  const [timerIsDisplayed, setTimerIsDisplayed] = useState(true);

  const toggleTimerDisplay = () => setTimerIsDisplayed(prevState => !prevState)

  const toggleTheme = useCallback(
    () => setTheme(theme === 'light' ? 'dark' : 'light'),
    [theme]
  )

  const themeContextValue = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme])

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <div className={styles.app}>
        <UserListWithButton id="asd" />
        <br/>

        Classes
        <TestAbstract />
        <TestClass />

        <br/>
        Functional
        <TestFuncComponent a={1} b={2} />
        <TestFuncComponent a={1} b={2} additional={5} optionalEnum="" />

        <br/>
        Counter
        <Counter />

        <br/>
        Timer
        <button onClick={toggleTimerDisplay}>{timerIsDisplayed ? 'Hide' : 'Display'} timer</button>
        {timerIsDisplayed && <Timer />}

        <br/>
        Theme
        <ThemeSwitcher />

        <br/>
        ThemeContext Consumer
        <ThemeContext.Consumer>
          {({ theme }) => <div>{theme}</div>}
        </ThemeContext.Consumer>

        <br/>
        Controlled Form
        <ControlledForm />

        <br/>
        Uncontrolled Form
        <UncontrolledForm />

        <br/>
        MouseListener
        <MouseListener>
          {(coordinates) => Object.entries(coordinates).map(([key, value]) => `${key}: ${value}`)}
        </MouseListener>
        <MouseListener>
          {({ x, y }) => (
            <div>
              Кординаты курсора:
              <br/>
              x: {x}, y: {y}
            </div>
          )}
        </MouseListener>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
