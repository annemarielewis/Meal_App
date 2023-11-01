import { Link } from 'react-router-dom'
import { Spinner, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap'

// Category > Meal in Category > Individual meal
// https://www.themealdb.com/api/json/v1/1/categories.php
// https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef
// https://www.themealdb.com/api/json/v1/1/lookup.php?i=52874

export default function CategoryList(props) {
    // loading when the cards are loading
    if (props.caterogies.length === 0) {
        return (
            <Spinner className="m-5" color="primary">
                Loading...
            </Spinner>
        )
    } else {
        return(
            <div>
                {/* MAP IN HERE, PUT CARD IN MAP */}
                <Card style={{ width: '18rem' }} >
                    <img alt='src = .strCaterogryThumb' src="https://picsum.photos/300/200" />
                    <CardBody>
                    <CardTitle tag="h5">
                        title = .strCategroy
                    </CardTitle>
                    <CardText>
                        text = .strCatergoryDescription
                    </CardText>
                    <Button>
                        <Link></Link> Go to category meals
                    </Button>
                </CardBody>
                </Card>
                <div>
                    <Button color="primary">
                        Button back to home
                    </Button>
                    </div>
            </div>
        )
    }
}