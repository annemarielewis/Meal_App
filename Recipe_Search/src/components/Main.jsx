import { Route, Routes } from "react-router-dom";

//importing components:
import CountryList from "./countries/CountryList";
import CountryMeals from "./countries/CountryMeals";
import CategoryMeals from "./categories/CategoryMeals";
import CategoryList from './categories/CategoryList'


import Recipe from "./Recipe"
import Home from './Home'
import SearchList from "./SearchList";

export default function Main() {
  return (
    <div>
      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/countries" element={<CountryList />} />
        <Route path="/countries/:country" element={<CountryMeals />} />
        <Route path="/country/meal/:id" element={<Recipe />}/>
        
        <Route path="/categories" element={<CategoryList />} />
        <Route path="/categories/:category" element={<CategoryMeals />} />
        <Route path="/category/meal/:id" element={<Recipe />}/>

        <Route path="/search/:search" element={<SearchList />} />        
        <Route path="/search/meal/:id" element={<Recipe />}/>

      </Routes>
    </div>
  );
}
