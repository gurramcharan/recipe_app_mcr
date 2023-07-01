import React, {useContext} from 'react'
import {useParams} from 'react-router-dom'
import {RecipeContext} from '../../context/RecipeContext'

export const RecipeDetail = () => {
    const {recipeId} = useParams()
    const {filteredRecipes} = useContext(RecipeContext)

    const FilteredProduct = filteredRecipes.filter((item) => item.id == recipeId)
    return (
        <div>
            {FilteredProduct.map((item) => (
                <div key={item.id}>
                    <div>
                        <h1>{item.name}</h1>
                    </div>
                    <div>
                        <div>
                            <img src={item.img} alt={item.name}/>
                        </div>
                        <div>
                            <p>Cuisine: {item.cuisine}</p>
                            <p><b>Ingredients: </b> {item.ingredients}</p>
                            <p><b>Instructions: </b> {item.instructions}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
