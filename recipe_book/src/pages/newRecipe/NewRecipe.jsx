import React, {useContext, useState} from 'react'
import {RecipeContext} from '../../context/RecipeContext'
import {useNavigate} from 'react-router-dom'

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
            <div>
                <div>
                    <label htmlFor="name">Name:
                    </label>
                    <input type="text" name='name' onChange={handleInputChange} required/>
                </div>
                <div>
                    <label htmlFor="cuisine">Cuisine:
                    </label>
                    <input type="text" name='cuisine' onChange={handleInputChange} required/>
                </div>
                <div>
                    <label htmlFor="ingredients">Ingredients</label>
                    <input type="text" name='ingredients' onChange={handleInputChange} required/>
                </div>
                <div>
                    <label htmlFor="instructions">Instructions</label>
                    <input type="text" name='instructions' onChange={handleInputChange} required/>
                </div>
                <div>
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

                <div>
                    <button type='submit' onClick={() => handleNewAddress()}>Add</button>
                </div>
            </div>
        </div>
    )
}
