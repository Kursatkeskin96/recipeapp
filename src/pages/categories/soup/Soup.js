import React, {useState, useEffect} from 'react'
import './Soup.css'
import recipes from '../../../data/recipe.json'
import { Link } from 'react-router-dom';

export default function Soup() {
  const [soupRecipes, setSoupRecipes] = useState([]);

  useEffect(() => {
    setSoupRecipes(
      recipes.recipes
        .filter(recipe => recipe.category === 'soup')
    );
  }, []);


  return (
    <div className='container'>
      <h3 className='mt-5 font bold'>Soup Recipes</h3>
    <hr></hr>
    <div className='mt-5 d-flex justify-content-around flex-wrap'>
      {soupRecipes.map(recipe => (

        <div key={recipe.id} className="spesific-card">
         <Link className="card-link" to={`/recipes/${recipe.id}`}>
          <h5 className="spesific-card-title font bold">{recipe.name}</h5>
          <img className="spesific-card-img" src={recipe.url} alt="Soup"></img>
          </Link>
        </div>
      ))}
    </div>
    </div>
  );
      }
  