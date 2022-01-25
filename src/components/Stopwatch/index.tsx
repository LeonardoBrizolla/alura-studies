import { useState } from 'react';
import { timeToSeconds } from '../../common/utils/time';
import { ITasks } from '../../types/tasks';
import Button from '../Button';
import { Clock } from './Clock';

import styles from './Stopwatch.module.scss';

interface StopwatchProps {
  selected: ITasks | undefined;
}

export const Stopwatch = ({ selected }: StopwatchProps) => {
  const [time, setTime] = useState<number>();

  if (selected?.time) {
    setTime(timeToSeconds(selected.time));
  }

  return (
    <div className={styles.cronometro}>
      <p className={styles.titulo}>Chose a card and start the stopwatch</p>
      Time: {time}
      <div className={styles.relogioWrapper}>
        <Clock />
      </div>
      <Button>Start</Button>
    </div>
  );
};
