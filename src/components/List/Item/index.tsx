import styles from '../List.module.scss';

export const Item = ({ title, time }: { title: string; time: string }) => {
  return (
    <li className={styles.item}>
      <h3>{title}</h3>
      <span> {time} </span>
    </li>
  );
};
