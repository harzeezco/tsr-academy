'use client';

import useStopTimer from '../../hooks/use-stoptimer';
import { countDownData } from '../../lib/utils';

export function StopTimer() {
  const { countDown } = useStopTimer();

  const getCountDown = countDownData(countDown);

  return (
    <ul className='flex gap-5'>
      {getCountDown.map(({ formatter, type }) => (
        <li key={type} className='flex items-center gap-4'>
          <div className='flex flex-col items-center'>
            <p className='font-inter text-[32px] font-bold tracking-widest'>
              {formatter}
            </p>
            <small className='font-medium'>{type}</small>
          </div>
        </li>
      ))}
    </ul>
  );
}
