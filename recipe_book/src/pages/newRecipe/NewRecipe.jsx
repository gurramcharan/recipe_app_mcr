import React, {useContext, useState} from 'react'
import {RecipeContext} from '../../context/RecipeContext'
import {useNavigate} from 'react-router-dom'
import "./NewRecipe.css"

export const NewRecipe = () => {

    const {addRecipe} = useContext(RecipeContext)
    const navigate = useNavigate()

    const [newRecipe,
        setNewRecipe] = useState({name: "", cuisine: "", ingredients: "", instructions: "", img: null})

    const handleInputChange = (event) => {
        setNewRecipe(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    const handleImageChange = (event) => {
        const selectedFile = event.target.files[0];
        setNewRecipe(prev => ({
            ...prev,
            img: URL.createObjectURL(selectedFile)
        }));
    };

    const handleNewAddress = () => {
        if (newRecipe.name !== "") {
            addRecipe(newRecipe);
            setTimeout(() => {
                navigate("/")
            }, 1000);
        }
    }

    return (
        <div>
            <h1 className='new-recipe-heading'>NEW RECIPE</h1>
            <div className='new-recipe-main-container large'>
                <div className='new-recipe-container'>
                    <div className='flex-row space-between'>
                        <label htmlFor="name">Name:
                        </label>
                        <input type="text" name='name' onChange={handleInputChange} required/>
                    </div>
                    <div className='flex-row space-between'>
                        <label htmlFor="cuisine">Cuisine:
                        </label>
                        <input type="text" name='cuisine' onChange={handleInputChange} required/>
                    </div>
                    <div className='flex-row space-between'>
                        <label htmlFor="ingredients">Ingredients</label>
                        {/* <input type="text" className='text-area'  name='ingredients' onChange={handleInputChange} required/> */}
                        <textarea name='ingredients' onChange={handleInputChange} cols="16" rows="3"/>
                    </div>
                    <div className='flex-row space-between'>
                        <label htmlFor="instructions">Instructions</label>
                        <textarea
                            name='instructions'
                            onChange={handleInputChange}
                            cols="16"
                            rows="4"
                            required/>
                    </div>
                    <div className='flex-row gap'>
                        <label htmlFor="img">Upload Img:
                        </label>
                        <input
                            type="file"
                            id="img"
                            name="img"
                            accept="image/*"
                            onChange={handleImageChange}
                            required/>
                    </div>

                    <div className='btn-container'>
                        <button className='submit-btn' type='submit' onClick={() => handleNewAddress()}>Add</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
