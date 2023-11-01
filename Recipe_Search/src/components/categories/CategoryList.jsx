import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Spinner,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";

// Category > Meal in Category > Individual meal
// https://www.themealdb.com/api/json/v1/1/categories.php
// https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef
// https://www.themealdb.com/api/json/v1/1/lookup.php?i=52874

export default function CategoryList(props) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      let response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/categories.php`
      );
      console.log(response);
      setCategories(response.data.categories);
    };
    getCategories();
  }, []);

  // loading when the cards are loading
  if (categories.length === 0) {
    return (
      <Spinner className="m-5" color="primary">
        Loading...
      </Spinner>
    );
  } else {
    return (
      <div>
        <h1>Categories: </h1>
        {categories.map((category) => (
          <Card style={{ width: "18rem" }} key={category.idCategory}>
            <img alt={category.strCategory} src={category.strCatergoryThumb} />
            <CardBody>
              <CardTitle tag="h5">{category.strCategory}</CardTitle>
              <CardText>{category.strCatergoryDescription}</CardText>
              <Button>
                <Link key={category} to={`/categories/${category.strCategory}`}>
                  Find Meals
                </Link>
              </Button>
            </CardBody>
          </Card>
        ))}
        <div>
          <Button color="primary">
            <Link to="/">Home</Link>
          </Button>
        </div>
      </div>
    );
  }
}
