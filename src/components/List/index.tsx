import { ITasks } from '../../types/tasks';
import { Item } from './Item';

import styles from './List.module.scss';

interface ListProps {
  tasks: ITasks[];
  selectTask: (taskSelected: ITasks) => void;
}

function List({ tasks, selectTask }: ListProps) {
  return (
    <aside className={styles.listaTarefas}>
      <h2>Studies of the day</h2>
      <ul>
        {tasks.map((task) => (
          <Item key={task.id} selectTask={selectTask} {...task} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
