export const RecipeReducer = (state,action) => {
    switch (action.type) {
        case "newRecipe":
            return [
                ...state, {
                    id: state.length + 1,
                    name: action.payload.name,
                    cuisine: action.payload.cuisine,
                    ingredients: action.payload.ingredients,
                    instructions: action.payload.instructions,
                    img: action.payload.img,
                }
            ];
        case "deleteRecipe":
            const updateRecipe = state.filter((item) => item.id !== action.payload)
            return updateRecipe;
        default:
            return state
    }
}