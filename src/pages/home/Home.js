import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Home.css';
import { Link } from 'react-router-dom';
import recipes from '../../data/recipe.json';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper';


export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(
      recipes.recipes
        .filter((item, index) => [0, 1, 12, 13, 20, 21].includes(index))
    );
  }, []);



  return (
    <div className='container mt-4'>
      <div className='home-body'>
      <h4>Popular Recipes</h4>
      <hr className='mb-5'></hr>
      <div className='swiper-container'>
      <Swiper
  effect={"coverflow"}
  grabCursor={true}
  centeredSlides={true}
  slidesPerView={"3"}
  coverflowEffect={{
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true
  }}
  pagination={{ clickable: true }}
  modules={[EffectCoverflow, Pagination]}
  className="mySwiper"
  initialSlide={2}
>

<div>
{data.map((recipe) => (
  <div key={recipe.id}>

      <SwiperSlide key={recipe.id}>
        <p className="swiper-p">{recipe.name}</p>
        <Link to={`/recipes/${recipe.id}`}>
        <img src={recipe.url} alt=".." />
        </Link>
      </SwiperSlide>

  </div>
))}

</div>
</Swiper>
</div>
  <div className='categories'>

  <h4 className='mt-5'>Categories</h4>
  <hr></hr>

  <div className='card-container d-flex justify-content-around align-items-center flex-wrap mt-5 mb-5'>
    
    <Link to='/soup' className='card-link' >
    <div className="card mt-3">
      <img className="card-img-top" src="https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="Soup"></img>
      <div className="card-body">
        <h5 className="card-title">Soups</h5>
        <p className="card-text">From creamy bisques to chunky chowders, our soup collection has something for every palate. You will love them.</p>

    </div>
  </div>
  </Link>

  <Link to='/healthy-family-recipes' className='card-link' >
<div className="card mt-3">
  <img className="card-img-top" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRoeSUyMGZvb2RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Soup"></img>
  <div className="card-body">
    <h5 className="card-title">Healthy Family Recipes</h5>
    <p className="card-text">With our collection of healthy family recipes, you can create delicious meals that everyone will love. Healthy life, happy life.</p>
  </div>
</div>
</Link>

<Link to='/low-carb-slow-cooker' className='card-link' >
<div className="card mt-3">
  <img className="card-img-top" src="https://images.unsplash.com/photo-1485704686097-ed47f7263ca4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bG93JTIwY2FyYiUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Soup"></img>
  <div className="card-body">
    <h5 className="card-title">Low-Carb Slow Cookers</h5>
    <p className="card-text"> Looking for tasty and satisfying meals that won't derail your low carb diet? Check out our collection of low carb recipes</p>
  </div>
</div>
</Link>
</div>
</div>
</div>
</div>

  )
}
