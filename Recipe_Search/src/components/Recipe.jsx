//importing libraries and packages
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";

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
    <>
      <h1>Meal: {recipe.strMeal}</h1>
      <h2>Category: {recipe.strCategory}</h2>
      <Button>Save Recipe</Button>
      <div className="flex">
        <div className="block">
          <img
            alt="Food"
            style={{ width: "40rem" }}
            src={recipe.strMealThumb}
          />
          <br></br>
          <Link to="/countries"> Pick Different Type of Food</Link>
        </div>
        <div>
          <ul className="block">
            <h1>Ingredients:</h1>
            {getIngredients(recipe).map((ingredient) => (
              <li>{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
      <p>
        <h2>Directions: </h2> {recipe.strInstructions}
      </p>
    </>
  ) : (
    <h3>Finding Recipe... Yummy!</h3>
  );
}
