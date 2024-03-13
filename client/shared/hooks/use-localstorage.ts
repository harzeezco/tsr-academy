'use client';

import * as React from 'react';

function useLocalStorage(key: string, defaultValue: any) {
  const [storage, setStorage] = React.useState(() => {
    const getStorage = window.localStorage.getItem(key);

    if (getStorage) {
      return JSON.parse(getStorage);
    }

    return typeof defaultValue === 'function'
      ? defaultValue()
      : defaultValue;
  });

  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(storage));
  }, [storage, key]);

  return [storage, setStorage];
}

export default useLocalStorage;
