import styles from './Clock.module.scss';

export const Clock = () => {
  return (
    <>
      <span className={styles.relogioNumero}>0</span>
      <span className={styles.relogioNumero}>0</span>
      <span className={styles.relogioDivisao}>:</span>
      <span className={styles.relogioNumero}>0</span>
      <span className={styles.relogioNumero}>0</span>
    </>
  );
};
