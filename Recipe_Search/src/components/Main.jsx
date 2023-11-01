import { Route, Routes } from "react-router-dom";

//importing components:
import CountryList from "./countries/CountryList";
import CountryMeals from "./countries/CountryMeals";
import Recipe from "./Recipe"
import Home from './Home'

export default function Main() {
  return (
    <div>
      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/countries" element={<CountryList />} />
        <Route path="/countries/:country" element={<CountryMeals />} />
        <Route path="/country/meal/:id" element={<Recipe />}/>
      </Routes>
    </div>
  );
}
