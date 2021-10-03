import React  from 'react'
import Counter from './components/counter'
import {
  TestAbstract,
  TestClass,
} from './components/test-class'
import TestFuncComponent from './components/test-func-component'
import UserList from './components/user-list'
import styles from './styles.module.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <UserList />
      <br/>

      Classes
      <TestAbstract />
      <TestClass />

      <br/>
      Functional
      <TestFuncComponent a={1} b={2} />
      <TestFuncComponent a={1} b={2} additional={5} />

      <br/>
      Counter
      <Counter />
    </div>
  );
}

export default App;
