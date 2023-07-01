import React, { useContext } from 'react'
import { RecipeContext } from '../../context/RecipeContext'
import { HiOutlinePlusCircle } from 'react-icons/hi';
import {Link} from "react-router-dom"
import { Search } from '../../components/search/Search';

export const Home = () => {
    const {filteredRecipes, RecipeDispatch} = useContext(RecipeContext)
  return (
    <div>
        <Search />
        <h1>All Recipes: </h1>
        <div>
            {filteredRecipes.map((item) => (
                <div key={item.id}>
                    <p>{item.name}</p>
                    {/* <img src={item.img} alt={item.name} /> */}
                    <button onClick={() => RecipeDispatch({type: "deleteRecipe", payload: item.id})}>Delete</button>
                </div>
            ))}
            <Link to="/newrecipe"><HiOutlinePlusCircle /></Link>
        </div>
    </div>
  )
}
