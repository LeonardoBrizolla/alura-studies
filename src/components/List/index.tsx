import React from 'react';

import styles from './List.module.scss';

function List() {
  const tasks = [
    {
      id: 1,
      title: 'React',
      time: '02:00:00',
    },
    {
      id: 2,
      title: 'JS/TS',
      time: '01:00:00',
    },
    {
      id: 3,
      title: 'Styled Components',
      time: '01:30:00',
    },
  ];

  return (
    <aside className={styles.listaTarefas}>
      <h2>Studies of the day</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={styles.item}>
            <h3>{task.title}</h3>
            <span> {task.time} </span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default List;
