import { useState } from 'react';

import Form from '../components/Form';
import List from '../components/List';
import { Stopwatch } from '../components/Stopwatch';
import { ITasks } from '../types/tasks';

import styles from './App.module.scss';

function App() {
  const [tasks, setTasks] = useState<ITasks[]>([
    {
      title: 'React',
      time: '02:00:00',
      selected: false,
      done: false,
      id: '1',
    },
    {
      title: 'JS/TS',
      time: '01:00:00',
      selected: false,
      done: false,
      id: '2',
    },
    {
      title: 'Styled Components',
      time: '01:30:00',
      selected: false,
      done: false,
      id: '3',
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
