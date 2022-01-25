import { useState } from 'react';

import Form from '../components/Form';
import List from '../components/List';
import { Stopwatch } from '../components/Stopwatch';

import styles from './App.module.scss';

function App() {
  const [tasks, setTasks] = useState([
    {
      title: 'React',
      time: '02:00:00',
    },
    {
      title: 'JS/TS',
      time: '01:00:00',
    },
    {
      title: 'Styled Components',
      time: '01:30:00',
    },
  ]);

  return (
    <div className={styles.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} />
      <Stopwatch />
    </div>
  );
}

export default App;
