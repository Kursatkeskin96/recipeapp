import React from 'react'
import { Routes, Route} from "react-router-dom";
import Home from './pages/home/Home'
import Healthy from './pages/categories/healthy-family-recipes/Healthy'
import Lowcarb from './pages/categories/low-carb-slow-cooker-recipes/Lowcarb'
import Soup from './pages/categories/soup/Soup'
import FoodDetails from './pages/food-detail/FoodDetails';
import NotFound from './pages/NotFound';

export default function App() {
  return (
<Routes>
  <Route exact path='/' element={<Home />} />
  <Route exact path='/healthy-family-recipes' element={<Healthy />} />
  <Route exact path='/low-carb-slow-cooker' element={<Lowcarb />} />
  <Route exact path='/soup' element={<Soup />} />
  <Route exact path="/recipes/:id" element={<FoodDetails />} />
  <Route path='*' element={<NotFound />} />
</Routes>
  )
}
