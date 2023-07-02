import React, { useContext} from 'react'
import { RecipeContext } from '../../context/RecipeContext'
import "./Search.css"

export const Search = () => {
    
    const {filterType, setFilterType, setSearchValue} = useContext(RecipeContext)

    const handleSearch = (e) => {
        setSearchValue(e.target.value)
    }
  return (
    <div className='flex-row gap align-items'>
        <div>
            <input className='search-bar' type="text" placeholder='Search the Item you want...' onChange={(e) => handleSearch(e)} />
        </div>
        <div className='flex-row gap large'>
            <label>Filters: </label>
            <div>
                <input type="radio" name="filtertype" value="name" id="name" checked={(filterType === "name")? true: false} onChange={(e) => setFilterType(e.target.value)} />
                <label htmlFor="name">Name</label>
            </div>
            <div>
                <input type="radio" name="filtertype" value="ingredients" id="ingredients"  onChange={(e) => setFilterType(e.target.value)} />
                <label htmlFor="ingredients">Ingredients</label>
            </div>
            <div>
                <input type="radio" name="filtertype" value="cuisine" id="cuisine"  onChange={(e) => setFilterType(e.target.value)} />
                <label htmlFor="cuisine">Cuisine</label>
            </div>
        </div>
    </div>
  )
}
