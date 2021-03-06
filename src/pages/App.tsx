import { useState } from 'react';

import { Form } from '../components/Form';
import List from '../components/List';
import { Stopwatch } from '../components/Stopwatch';
import { ITasks } from '../types/tasks';

import styles from './App.module.scss';

function App() {
  const [tasks, setTasks] = useState<ITasks[]>([]);
  const [selected, setSelected] = useState<ITasks>();

  const selectTask = (taskSelected: ITasks) => {
    setSelected(taskSelected);

    setTasks((oldTasks) =>
      oldTasks.map((task) => ({
        ...task,
        selected: task.id === taskSelected.id ? true : false,
      }))
    );
  };

  const doneTask = () => {
    if (selected) {
      setSelected(undefined);

      setTasks((oldTasks) => 
        oldTasks.map((task) => {
          if (task.id === selected.id) {
            return {
              ...task,
              selected: false,
              done: true,
            }
          }

          return task
        })
      )
    }
  }

  return (
    <div className={styles.AppStyle}>
      <Form setTasks={setTasks} />

      <List 
        tasks={tasks} 
        selectTask={selectTask} 
      />

      <Stopwatch 
        selected={selected} 
        doneTask={doneTask}
      />
    </div>
  );
}

export default App;
