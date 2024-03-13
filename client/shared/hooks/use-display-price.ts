import fx from 'money';

import useExchangeRate from './use-exchange-rate';

function useDisplayPrice() {
  const exchangeRate = useExchangeRate();

  fx.base = 'USD';
  fx.rates = {
    ...exchangeRate,
  };

  function displayPrice(amount: number, countryCode: string) {
    const formattedAmount = fx(amount).to(countryCode);
    const currencySymbol = fx(0).to(countryCode);

    return `${formattedAmount} ${currencySymbol}`;
  }

  return displayPrice;
}

export default useDisplayPrice;
