//importing the packages/libraries that we'll need
import axios from "axios"; //package
import { useState, useEffect } from "react"; //react library
import { Link } from "react-router-dom"; //React Router library

let response;

export default function CountryList() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
      );
      console.log(response);
      setCountries(response.data.meals);
    };
    getCountries();
  }, []);
  console.log(countries);

  return countries ? (
    <div className="countries">
    <h1>Type of Food:</h1>
      {countries.map((country) => (
        <Link key={country} to={`/countries/${country.strArea}`}>
          <div className="country-card">
            <h3>{country.strArea}</h3>
          </div>
        </Link>
      ))}
    </div>
  ) : (
    <h3>Finding Countries... Yummy!</h3>
  );
}
