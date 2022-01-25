import { ITasks } from '../../../types/tasks';
import styles from '../List.module.scss';

export const Item = ({ title, time, selected, done, id }: ITasks) => {
  console.log('Item atual: ', { title, time, selected, done, id });

  return (
    <li className={styles.item}>
      <h3>{title}</h3>
      <span> {time} </span>
    </li>
  );
};
