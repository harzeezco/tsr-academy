import * as React from 'react';

const africanCountriesSet = new Set([
  'Algeria',
  'Angola',
  'Benin',
  'Botswana',
  'Burkina Faso',
  'Burundi',
  'Cabo Verde',
  'Cameroon',
  'Central African Republic',
  'Chad',
  'Comoros',
  'Democratic Republic of the Congo',
  'Djibouti',
  'Egypt',
  'Equatorial Guinea',
  'Eritrea',
  'Eswatini',
  'Ethiopia',
  'Gabon',
  'Gambia',
  'Ghana',
  'Guinea',
  'Guinea-Bissau',
  'Ivory Coast',
  'Kenya',
  'Lesotho',
  'Liberia',
  'Libya',
  'Madagascar',
  'Malawi',
  'Mali',
  'Mauritania',
  'Mauritius',
  'Morocco',
  'Mozambique',
  'Namibia',
  'Niger',
  'Nigeria',
  'Republic of the Congo',
  'Rwanda',
  'Sao Tome and Principe',
  'Senegal',
  'Seychelles',
  'Sierra Leone',
  'Somalia',
  'South Africa',
  'South Sudan',
  'Sudan',
  'Tanzania',
  'Togo',
  'Tunisia',
  'Uganda',
  'Zambia',
  'Zimbabwe',
]);

function useLocation() {
  const [ipAddress, setIpAddress] = React.useState('');
  const [data, setData] = React.useState({});
  const [country, setCountry] = React.useState('');

  async function getIpAddress() {
    try {
      const res = await fetch('https://api.ipify.org?format=json');
      const data = await res.text();

      setIpAddress(data);
    } catch {
      setIpAddress('');
    }
  }

  React.useEffect(() => {
    getIpAddress();
  }, []);

  React.useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(
          `https://ipapi.co/${ipAddress}/json/`,
        );
        const data = await res.json();

        if (africanCountriesSet.has(data?.country_name)) {
          setCountry('African');
        } else {
          setCountry('Non-African');
        }

        setData(data);
      } catch (error) {
        console.log('Error:', error);
      }
    }

    getData();
  }, []);

  return { data, country };
}

export default useLocation;
