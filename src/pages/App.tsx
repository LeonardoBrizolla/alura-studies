import Form from '../components/Form';
import List from '../components/List';
import { Stopwatch } from '../components/Stopwatch';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.AppStyle}>
      <Form />
      <List />
      <Stopwatch />
    </div>
  );
}

export default App;
