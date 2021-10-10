import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Counter from '../../components/counter';
import MouseListener from '../../components/mouse-listener';
import { TestAbstract, TestClass } from '../../components/test-class';
import TestFuncComponent from '../../components/test-func-component';
import ThemeSwitcher from '../../components/theme-switcher';
import Timer from '../../components/timer';
import UserList from '../../components/user-list';
import ThemeContext from '../../context/ThemeContext';
import withButton from '../../wrappers/withButton';

const UserListWithButton = withButton(UserList);

const Home = () => {
  const [timerIsDisplayed, setTimerIsDisplayed] = useState(true);

  const counter = useRef();

  const toggleTimerDisplay = () => setTimerIsDisplayed((prevState) => !prevState);

  const incrementCount = () => counter.current?.incrementCount();
  const decrementCount = () => counter.current?.decrementCount();
  const resetCount = () => counter.current?.reset();

  return (
    <>
      <Link to="/forms">Go to forms page</Link>
      <Link
        to={{
          pathname: '/forms',
          search: '?sort=name',
          hash: '#the-hash',
          state: { from: 'Home' },
        }}
      >
        Link with object prop
      </Link>
      <br />
      <UserListWithButton id="asd" />
      <br />
      Classes
      <TestAbstract />
      <TestClass />
      <br />
      Functional
      <TestFuncComponent a={1} b={2} />
      <TestFuncComponent a={1} b={2} additional={5} optionalEnum="" />
      <br />
      Counter
      <button onClick={incrementCount}>plus</button>
      <button onClick={decrementCount}>minus</button>
      <button onClick={resetCount}>reset</button>
      <Counter ref={counter} />
      <br />
      Timer
      <button onClick={toggleTimerDisplay}>{timerIsDisplayed ? 'Hide' : 'Display'} timer</button>
      {timerIsDisplayed && <Timer />}
      <br />
      Theme
      <ThemeSwitcher />
      <br />
      ThemeContext Consumer
      <ThemeContext.Consumer>{({ theme }) => <div>{theme}</div>}</ThemeContext.Consumer>
      <br />
      MouseListener
      <MouseListener>
        {(coordinates) => Object.entries(coordinates).map(([key, value]) => `${key}: ${value}`)}
      </MouseListener>
      <MouseListener>
        {({ x, y }) => (
          <div>
            Кординаты курсора:
            <br />
            x: {x}, y: {y}
          </div>
        )}
      </MouseListener>
    </>
  );
};

export default Home;