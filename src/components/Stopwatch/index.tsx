import Button from '../Button';
import { Clock } from './Clock';

import styles from './Stopwatch.module.scss';

export const Stopwatch = () => {
  return (
    <div className={styles.cronometro}>
      <p className={styles.titulo}>Chose a card and start the stopwatch</p>
      <div className={styles.relogioWrapper}>
        <Clock />
      </div>

      <Button>Start</Button>
    </div>
  );
};
