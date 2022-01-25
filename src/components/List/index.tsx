import { ITasks } from '../../types/tasks';
import { Item } from './Item';

import styles from './List.module.scss';

function List({ tasks }: { tasks: ITasks[] }) {
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
