import { ITasks } from '../../../types/tasks';

import styles from './Item.module.scss';

interface ItemProps extends ITasks {
  selectTask: (taskSelected: ITasks) => void;
}

export const Item = ({
  title,
  time,
  selected,
  done,
  id,
  selectTask,
}: ItemProps) => {
  return (
    <li
      className={`${styles.item} ${selected ? styles.itemSelecionado : ''} ${done ? styles.itemCompletado : ''}`}
      onClick={() =>
        !done && selectTask({
          id,
          title,
          time,
          selected,
          done,
        })
      }
    >
      <h3>{title}</h3>
      <span>{time}</span>
      {done && 
        <span 
          className={styles.concluido}
          aria-label="Task done"
        ></span>
      }
    </li>
  );
};
