import React  from 'react'
import logo from './assets/images/logo.svg';
import HelloReact from './components/hello-react';
import Wrapper from './components/wrapper';
import styles from './styles.module.scss';

const data = [{ id: 1, text: 'text 1' }, { id: 2, text: 'text 2' }];

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={styles.link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {data.map(({ id, text}) => {
          return (
            <Wrapper key={id}>
              <HelloReact text={text} id={id} />
            </Wrapper>
          )
        })}
      </header>
    </div>
  );
}

export default App;
