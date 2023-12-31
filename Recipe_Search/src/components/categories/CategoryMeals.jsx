import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { Spinner, Card, CardBody, CardTitle, Button } from 'reactstrap'

export default function CategoryMeals(props) {
    // api link uses individual id number found in meals list (idMeal)
    // https://www.themealdb.com/api/json/v1/1/lookup.php?i=52874
    let { category } = useParams()
    // console.log(category)

    const [meals, setMeals] = useState([])

    useEffect(()=> {
        const getMeals = async () => {
            let response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
            console.log(response)
            setMeals(response.data.meals)
        }
        getMeals()
    }, [])
    console.log(meals)
    // if none, show loading sign
    if (category.length === 0){
        return (
            <Spinner className="m-5" color="primary">
                Loading...
            </Spinner>
        )
    } else {
        return(
            <div className='catergory'>
                <h1 className='page-title'>Meals</h1>
                {meals.map((meal)=> (
                    <Card style={{ width: '18rem' }} key={meal.idMeal}>
                        <img alt='src = .strMealThumb' src={meal.strMealThumb} />
                        <CardBody>
                            <CardTitle tag="h5">
                                {meal.strMeal}
                            </CardTitle>
                            <Button className='button'>
                                <Link key={meal.idMeal} to={`/country/meal/${meal.idMeal}`} className='link'>Get Recipe</Link>
                            </Button>
                        </CardBody>
                    </Card>
                ))}
                <Button color="primary" className="back-button">
                    <Link to="/categories" className="link">Home</Link>
                </Button>
            </div>
        )
    }
}