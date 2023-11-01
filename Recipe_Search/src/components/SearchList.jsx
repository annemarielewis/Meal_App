//importing libraries and packages
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { Card, CardBody, CardTitle, Button, Spinner } from "reactstrap";

export default function SearchList() {
  
  let { search } = useParams();

  const [meals, setMeals] = useState("");

  useEffect(() => {
    const getmeals = async () => {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      console.log('new search')
      console.log("Meals", response.data.meals)
      setMeals(response.data.meals);
    };
    getmeals();
  }, [search]);
//   console.log(meals);
if (meals === null ) {
    return(<h3>No Recipes Found</h3>)
}  else if (meals == "") {
    return(
        <Spinner className="m-5" color="primary">
        Loading...
        </Spinner>
    )
} else {
    return  (
        <div className="meals">
          {meals.map((meal) => (
            <Link key={meal.idMeal} to={`/search/meal/${meal.idMeal}`}>
              <Card style={{ width: "18rem" }}>
                <img alt={`picture of ${meal.strMeal}`} src={meal.strMealThumb} />
                <CardBody>
                  <CardTitle tag="h5">{meal.strMeal}</CardTitle>
                  <Button>Choose Meal</Button>
                </CardBody>
              </Card>
            </Link>
          ))}
        </div>
      ) 
}
// return meals ? (
//     <div className="meals">
//       {meals.map((meal) => (
//         <Link key={meal.idMeal} to={`/search/meal/${meal.idMeal}`}>
//           <Card style={{ width: "18rem" }}>
//             <img alt={`picture of ${meal.strMeal}`} src={meal.strMealThumb} />
//             <CardBody>
//               <CardTitle tag="h5">{meal.strMeal}</CardTitle>
//               <Button>Choose Meal</Button>
//             </CardBody>
//           </Card>
//         </Link>
//       ))}
//     </div>
//   ) : (
//     <h3>No Recipes Found</h3>
//   );
}
