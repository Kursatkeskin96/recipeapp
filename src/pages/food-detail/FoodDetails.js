import React from 'react'
import { useParams, Link } from 'react-router-dom'
import recipes from '../../data/recipe.json'
import { useState, useEffect } from 'react';
import './FoodDetails.css'
import {GiForkKnifeSpoon} from 'react-icons/gi'
import {BiTime} from 'react-icons/bi'

export default function FoodDetails() {
  
  const { id } = useParams();

  const [foodDetails, setFoodDetails] = useState([]);

  useEffect(() => {
    setFoodDetails(
      recipes.recipes
        .filter(recipe => recipe.id === id)
    );
  }, [id]);


  return (
    <div>

    {foodDetails.map(recipe => (

      <div className="container-details">
        
 <div className='container mt-5'>
 <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item font"><Link to="/">Home</Link></li>
    <li class="breadcrumb-item font"><Link to={`/${recipe.category}`}>{recipe.category}</Link></li>
    <li class="breadcrumb-item font active" aria-current="page">{recipe.id}</li>
  </ol>
</nav>
  <div className="container-top">
      <div className='row'>
        <div className='col-lg-3'>
        <div className='details-img'>
        <img className="mini-img" src={recipe.url} alt="..."></img>
        </div>
        </div>

        <div className='col-lg-7'>
        <div className='details-h2 font'><h2>{recipe.name}</h2></div>

        <div className='description mt-4 font'>{recipe.description}</div>
        <div className='serves-cook mt-3'>
        <div className='serves font'><GiForkKnifeSpoon /> Serves: <span className="serves-span">{recipe.serves}</span> </div>
        <div className='cook font'><BiTime /> Cooking Time: <span className="serves-span">{recipe.cook}</span></div>
        </div>

        <div className='mini-descriptions flex-wrap mt-3'>
  <div className='mini-mini'>
    <span className='description-title'>Kcal:</span> 
    <span className="description-p">{recipe.kcal}</span>
  </div>
  <div className='mini-mini'>
    <span className='description-title'>Fat:</span>
    <span className="description-p">{recipe.fat}</span>
  </div>
  <div className='mini-mini'>
    <span className='description-title'>Saturates:</span> 
    <span className="description-p">{recipe.saturates}</span>
  </div>
  <div className='mini-mini'>
    <span className='description-title'>Carbs:</span> 
    <span className="description-p">{recipe.carbs}</span>
  </div>
  <div className='mini-mini'>
    <span className='description-title'>Sugars:</span> 
    <span className="description-p">{recipe.sugars}</span>
  </div>
  <div className='mini-mini'>
    <span className='description-title'>Fibre:</span> 
    <span className="description-p">{recipe.fibre}</span>
  </div>
  <div className='mini-mini'>
    <span className='description-title'>Protein:</span> 
    <span className="description-p">{recipe.protein}</span>
  </div>
  <div className='mini-mini'>
    <span className='description-title'>Salt:</span> 
    <span className="description-p">{recipe.salt}</span>
  </div>
</div>
        </div>
        </div>
       </div>
<div className='container-bottom mt-5 mb-5'>
       <div className='row mt-5'>
<div className='col-md-6 '>
<div className='ingredients'>
  <h3 className='font bold'>Ingredients:</h3>
  <ul>
    {recipe.ingredients.map((ingredient, index) => (
      <li key={index} className="lists">{ingredient}</li>
    ))}
  </ul>
</div>

</div>
<div className='col-md-6 '>
<div className='instructions'>
  <h3 className='font bold'>Instructions:</h3>
  <ol>
    {recipe.instructions.map((instruction, index) => (
      <li key={index} className="lists">{instruction}</li>
    ))}
  </ol>
</div>
</div>
</div>
      </div>
      </div>
      </div>
    ))}
    
    </div>
  )
}
