import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

export const GetCapsule = () => {
  const { id }= useParams();


  const fetchDataById = async (id) => {
    const response = await fetch(`https://restcountries.com/v3.1/alpha/${id}`);
    const jsonData = await response.json();
    return jsonData[0];
  };

  const { data: countryData, isLoading } = useQuery({
    queryKey: ["singleCountry", id],
    queryFn: () => fetchDataById(id),
    enabled: !!id,
  });
console.log(countryData);

  if (isLoading || !countryData) {
    return <h1>LOADING...</h1>;
  }

  return ( // eslint-disable-line no-console
    <>
      <h1>{countryData.name.official}</h1>
      <p>Country Code: {countryData.cca2}</p>
      <p>Capital: {countryData.capital} </p>
      <p>Region: {countryData.region}</p>
      <h2><b>FLAG:</b></h2><img src={countryData.flags.png} alt={countryData.flags.alt} />
    </>
  );
} 
