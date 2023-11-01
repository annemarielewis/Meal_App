//importing libraries and packages
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

export default function CountryMeals() {
  //Here, useParams() is taking the id from what's in the route in Main.js.
  //pulling the specific index of the planet we are clicking on: index=index of what was clicked
  let { country } = useParams();

  const [meals, setMeals] = useState("");

  useEffect(() => {
    const getmeals = async () => {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`
      );
      setMeals(response.data.meals);
      console.log(response);
    };
    getmeals();
  }, []);
  console.log(meals);
  return meals ? (
    <div className="meals">
      {meals.map((meal) => (
        <Link key={meal.idMeal} to={`/country/meal/${meal.idMeal}`}>
          <div className="meal-card">
            <h3>{meal.strMeal}</h3>
            
          </div>
        </Link>
      ))}
    </div>
  ) : (
    <h3>Finding your country's meals... yummy!</h3>
  );
}
