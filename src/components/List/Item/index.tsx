import { ITasks } from '../../../types/tasks';

import styles from '../List.module.scss';

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
  console.log('Item atual: ', { title, time, selected, done, id });

  return (
    <li
      className={`${styles.item} ${selected ? styles.itemSelecionado : ''}`}
      onClick={() =>
        selectTask({
          id,
          title,
          time,
          selected,
          done,
        })
      }
    >
      <h3>{title}</h3>
      <span> {time} </span>
    </li>
  );
};
