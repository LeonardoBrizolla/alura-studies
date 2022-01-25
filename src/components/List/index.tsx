import { Item } from './Item';

import styles from './List.module.scss';

function List() {
  const tasks = [
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
  ];

  return (
    <aside className={styles.listaTarefas}>
      <h2>Studies of the day</h2>
      <ul>
        {tasks.map((task, index) => (
          <Item key={index} {...task} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
