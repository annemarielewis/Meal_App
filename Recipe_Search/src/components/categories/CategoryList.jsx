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
        )
    } else {
        return(
            <div className='categories'>
                <h1 className='page-title'>Categories: </h1>
                {categories.map((category)=> (
                    <Link key={category} to={`/categories/${category.strCategory}`} className="link">
                    <Card style={{ width: '18rem' }} key={category.idCategory} className='category-card'>
                        <img alt={category.strCategory} src={category.strCategoryThumb} />
                        <CardBody>
                        <CardTitle tag="h5" className="category-name">
                            {category.strCategory}
                        </CardTitle>
                    </CardBody>
                    </Card>
                    </Link>
                ))}
                <div>
                    <Button color="primary" className="back-button">
                        <Link to="/" className="link">Home</Link>
                    </Button>
                    </div>
            </div>
        )
    }
}
