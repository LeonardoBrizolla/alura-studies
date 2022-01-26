import styles from './Clock.module.scss';

interface ClockProps {
  time: number | undefined;
}

export const Clock = ({ time = 0 }: ClockProps) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [minutesTen, minutesHundred] = String(minutes).padStart(2, '0');
  const [secondsTen, secondsHundred] = String(seconds).padStart(2, '0');

  return (
    <>
      <span className={styles.relogioNumero}>{minutesTen}</span>
      <span className={styles.relogioNumero}>{minutesHundred}</span>
      <span className={styles.relogioDivisao}>:</span>
      <span className={styles.relogioNumero}>{secondsTen}</span>
      <span className={styles.relogioNumero}>{secondsHundred}</span>
    </>
  );
};
