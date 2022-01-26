import { useEffect, useState } from 'react';
import { timeToSeconds } from '../../common/utils/time';
import { ITasks } from '../../types/tasks';
import Button from '../Button';
import { Clock } from './Clock';

import styles from './Stopwatch.module.scss';

interface StopwatchProps {
  selected: ITasks | undefined;
  doneTask: () => void;
}

export const Stopwatch = ({ selected, doneTask }: StopwatchProps) => {
  const [time, setTime] = useState<number>();

  const regressive = (countTime: number = 0) => {
    setTimeout(() => {
      if (countTime > 0) {
        setTime(countTime - 1);

        return regressive(countTime - 1);
      }

      doneTask();
    }, 1000)
  }

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected.time));
    }
  }, [selected]);

  return (
    <div className={styles.cronometro}>
      <p className={styles.titulo}>Chose a card and start the stopwatch</p>
      <div className={styles.relogioWrapper}>
        <Clock time={time} />
      </div>
      <Button onClick={() => regressive(time)}>Start</Button>
    </div>
  );
};
