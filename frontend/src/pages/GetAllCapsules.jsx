import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Link } from 'react-router-dom';
export const CountriesPage = () => {
  const [showFlags, setShowFlags] = useState(false);
  const countryApi = 'https://restcountries.com/v3.1/all';
  const fetchData = async () => {
    const response = await fetch(countryApi);
    const jsonData = await response.json();
    return jsonData;
  };

  const { data: countryData, isLoading } = useQuery({
    queryKey: ['countriesData'],
    queryFn: fetchData,
    enabled: showFlags,
  });

  if (isLoading) {
    return <h1>LOADING...</h1>;
  }

  return (
    <div>
      <h1>Countries of the World</h1>
      <button onClick={() => setShowFlags(true)}>Show countries</button>
      <ul>
        {countryData?.map((i) => (
          <li key={i.name.common}>
            <Link to={i.cca2}>
              <p>{i.name.common} {i.flag}</p>
              <img src={i.flags.png} alt={i.name.common} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
