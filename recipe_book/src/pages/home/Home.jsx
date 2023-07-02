import React, { useContext } from 'react'
import { RecipeContext } from '../../context/RecipeContext'
import { HiOutlinePlusCircle } from 'react-icons/hi';
import {Link} from "react-router-dom"
import { Search } from '../../components/search/Search';
import "./Home.css"

export const Home = () => {
    const {filteredRecipes, RecipeDispatch} = useContext(RecipeContext)
  return (
    <div>
        <Search />
        <h1>All Recipes: </h1>
        <div className='flex-row gap'>
            {filteredRecipes.map((item) => (
                <div key={item.id} className='item-container'>
                    <div>
                    <img src={item.img} alt={item.name} className='img' />
                    </div>
                    <div className='flex-row'>
                        <h4 className='item-name'>{item.name}</h4>
                    </div>
                    <div className='flex-row space-between'>
                        <h5>Cuisine Type:</h5>
                        <p>{item.cuisine}</p>
                    </div>
                    <div className='flex-row space-between'>
                        <h5>Ingredients:</h5>
                        <Link to={`/recipe/${item.id}`}>{`See Recipe >`}</Link>
                    </div>
                    <div className='flex-row space-between'>
                        <h5>Instructions:</h5>
                        <Link to={`/recipe/${item.id}`}>{`See Recipe >`}</Link>
                    </div>
                    <button onClick={() => RecipeDispatch({type: "deleteRecipe", payload: item.id})}>Delete</button>
                </div>
            ))}
            <Link className='plus-icon' to="/newrecipe"><HiOutlinePlusCircle /></Link>
        </div>
    </div>
  )
}
