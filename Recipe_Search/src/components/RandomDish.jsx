import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Spinner } from "reactstrap";

export default function RandomDish() {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const getRecipe = async () => {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/random.php`
      );
      console.log(response);
      setRecipe(response.data.meals[0]);
    };
    getRecipe();
  }, []);

  function getIngredients(x) {
    return Array.from({ length: 20 }, (_, i) =>
      (x[`strIngredient${i + 1}`] || "").trim()
    ).filter((ingredient) => ingredient);
  }

  //a ternary that outputs the planet after the axios call is done and "Finding planets..." before the planets are found from teh axios call"
  return recipe ? (
    <Link to={`/country/meal/${recipe.idMeal}`}>
      <div className="detail">
        <div className="detail-text">
          <h1>Random Fun Dish:</h1> 
          <h2>{recipe.strMeal}</h2>
          <ul></ul>
        </div>
        <img className="random-img" src={recipe.strMealThumb} />
      </div>
    </Link>
  ) : (
    <Spinner className="m-5" color="primary">
      Loading...
    </Spinner>
  );
}
