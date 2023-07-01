import { createContext, useReducer, useState } from "react";
import { RecipeReducer } from "../reducer/RecipeReducer";

import { recipes } from "../data/Data";

export const RecipeContext = createContext()

export const RecipeProvider = ({children}) => {
    const initialRecipes = recipes;
    const [filterType,setFilterType] = useState("name")
    const [searchValue,setSearchValue] = useState("")

    const [RecipeState,RecipeDispatch] = useReducer(RecipeReducer,initialRecipes)

    const addRecipe = (newAdd) => {
        if (newAdd !== "") {
            RecipeDispatch({type:"newRecipe", payload:newAdd})
        }
    }

    const filteredRecipes = (filterType === "name" && searchValue !== "") ? RecipeState.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase())) : (filterType === "ingredients" && searchValue !== "") ? RecipeState.filter((item) => item.ingredients.toLowerCase().includes(searchValue.toLowerCase())) : (filterType === "cuisine" && searchValue !== "") ? RecipeState.filter((item) => item.cuisine.toLowerCase().includes(searchValue.toLowerCase())) : RecipeState 

    return(
        <RecipeContext.Provider value={{addRecipe, initialRecipes,RecipeDispatch, filterType,setFilterType,searchValue,setSearchValue, filteredRecipes}}>
            {children}
        </RecipeContext.Provider>
    )
}