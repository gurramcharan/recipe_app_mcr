import React, { useContext} from 'react'
import { RecipeContext } from '../../context/RecipeContext'

export const Search = () => {
    
    const {filterType, setFilterType, setSearchValue} = useContext(RecipeContext)

    const handleSearch = (e) => {
        setSearchValue(e.target.value)
    }
  return (
    <div className='flex-row'>
        <div>
            <input type="text" placeholder='Search the Item you want based on type' onChange={(e) => handleSearch(e)} />
        </div>
        <div className='flex-row'>
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
