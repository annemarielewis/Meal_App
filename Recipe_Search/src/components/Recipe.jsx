//importing libraries and packages
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Recipe() {
  let { id } = useParams();

  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const getRecipe = async () => {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
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
    <div className="detail">
      <h1>Meal: {recipe.strMeal}</h1>
      <h2>Category: {recipe.strCategory}</h2>
      <h2>Directions: {recipe.strInstructions}</h2>
      <ul>
        Ingredients:
        {getIngredients(recipe).map((ingredient,i) => (
          <li key={i}>{ingredient}</li>
        ))}
      </ul>
      <img src={recipe.strMealThumb} />
      <Link to="/countries"> Pick Different Type of Food</Link>
    </div>
  ) : (
    <h3>Finding Recipe... Yummy!</h3>
  );
}