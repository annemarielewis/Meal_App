import RandomDish from "./RandomDish"
import SmallMeals from "./SmallMeals"
import Search from "./Search"

export default function Home() {

    return(
        <div className="home-outer">
            <RandomDish/>
            <div className="seperate">
                <div className="search-message">Find your next favorite meal.</div>
                <Search />
            </div>
            <div className="small-outer">
                <SmallMeals />
                <SmallMeals />
                <SmallMeals />
            </div>

        </div>
    )
}