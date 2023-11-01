import { Link, useNaivate } from 'react-router-dom'
import { Spinner, Card, CardBody, CardTitle, Button } from 'reactstrap'

export default function CategoryMeals(props) {
    // navigate to individual meal
    // api link uses individual id number found in meals list (idMeal)
    // https://www.themealdb.com/api/json/v1/1/lookup.php?i=52874
    let navigate = useNaivate()
    const showMeal = (meal) => {
        navigate(`${meal.name}`)
    }
    // if none, show loading sign
    if (props.catergory.length === 0){
        return (
            <Spinner className="m-5" color="primary">
                Loading...
            </Spinner>
        )
    } else {
        return(
            <div>
                {/* MAP IN HERE, PUT CARD INSIDE MAP */}
                <Card style={{ width: '18rem' }} key={idMeal}>
                    <img alt='src = .strMealThumb' src="https://picsum.photos/300/200" />
                    <CardBody>
                    <CardTitle tag="h5">
                        title = .strMeal
                    </CardTitle>
                    <Button>
                        <Link></Link> Go to category meals
                    </Button>
                </CardBody>
                </Card>
            </div>
        )
    }
}