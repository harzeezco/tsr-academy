import * as React from 'react';

function useExchangeRate() {
  const [exchangeRate, setExchangeRate] = React.useState(0);

  React.useEffect(() => {
    async function getExchangeRate() {
      try {
        const res = await fetch(
          'https://v6.exchangerate-api.com/v6/12556dc829551005548d4e72/latest/USD',
        );

        const data = await res.json();

        setExchangeRate(data.conversion_rates);
      } catch {
        console.log('Error');
      }
    }

    getExchangeRate();
  }, []);

  return exchangeRate as {};
}

export default useExchangeRate;
