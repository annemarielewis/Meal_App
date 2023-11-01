import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

export default function SmallMeals () {
    const [randomRecipe, setRandomRecipe] = useState('')

    useEffect(()=> {
        const getRecipe = async () => {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`)
            // console.log(response)
            setRandomRecipe(response.data.meals[0])
        }
        getRecipe()
    },[])
    console.log(randomRecipe)
    return (
        <Link to={`/category/meal/${randomRecipe.idMeal}`} className="small-outer">
            <div className="small-card">
               <img src={randomRecipe.strMealThumb} className="small-img"/>
               <h2 className="small-head">{randomRecipe.strMeal}</h2>
            </div>
        </Link>
    )
}