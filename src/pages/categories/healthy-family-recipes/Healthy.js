import React, {useState, useEffect} from 'react'
import './Healthy.css'
import recipes from '../../../data/recipe.json'
import { Link } from 'react-router-dom';


export default function Healthy() {
  const [healthyRecipes, setHealthyRecipes] = useState([]);

  useEffect(() => {
    setHealthyRecipes(
      recipes.recipes
        .filter(recipe => recipe.category === 'healthy-family-recipes')
    );
  }, []);

  return (
    <div className='container'>
    <h3 className='mt-5 font bold'>Healthy Family Recipes</h3>
    <hr></hr>
    <div className='mt-5 d-flex justify-content-around flex-wrap'>
      {healthyRecipes.map(recipe => (
              <div key={recipe.id} className="spesific-card">
              <Link className="card-link" to={`/recipes/${recipe.id}`}>
               <h5 className="spesific-card-title font">{recipe.name}</h5>
               <img className="spesific-card-img" src={recipe.url} alt="Soup"></img>
               </Link>
             </div>
      ))}
    </div>
    </div>
  );
      }
  