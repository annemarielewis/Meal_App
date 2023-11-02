//importing the packages/libraries that we'll need
import axios from "axios"; //package
import { useState, useEffect } from "react"; //react library
import { Link } from "react-router-dom"; //React Router library
// import "bootstrap";

import { Spinner } from "reactstrap";

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
    <div className="countries list">
      <h1 className="page-title">Type of Food:</h1>
      {countries.map((country, i) => (
        <Link key={i} to={`/countries/${country.strArea}`} className="link">
          <div className="country-card">
            <h3 className="page-title">{country.strArea}</h3>
          </div>
        </Link>
      ))}
    </div>
  ) : (
    <Spinner className="m-5" color="primary">
      Loading...
    </Spinner>
  );
}
