'use client';

import moment, { Duration } from 'moment';
import { useEffect, useState } from 'react';

interface UseCountDownResult {
  countDown: Duration;
}

function getInitialCountDown() {
  const storedCountDownString = localStorage.getItem('countDown');

  return storedCountDownString
    ? moment.duration(JSON.parse(storedCountDownString))
    : moment.duration(3, 'days');
}

function useStopTimer() {
  const [countDown, setCountDown] = useState(getInitialCountDown);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown((prevDuration: Duration) =>
        moment.duration(prevDuration.as('seconds') - 1, 'seconds'),
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures the effect runs only once during initial mount

  useEffect(() => {
    localStorage.setItem('countDown', JSON.stringify(countDown));
  }, [countDown]);

  useEffect(() => {
    if (countDown.asSeconds() <= 0) {
      setCountDown(moment.duration(3, 'days'));
    }
  }, [countDown]);

  if (!countDown) {
    throw new Error('Countdown cannot be found');
  }

  return { countDown } as UseCountDownResult;
}

export default useStopTimer;
