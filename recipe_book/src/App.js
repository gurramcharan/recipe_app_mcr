import './App.css';
import {Routes,Route} from "react-router-dom";
import { Home } from './pages/home/Home';
import { NewRecipe } from './pages/newRecipe/NewRecipe';
import { RecipeDetail } from './pages/recipeDetail/RecipeDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newrecipe" element={<NewRecipe />} />
        <Route path="/recipe" element={<RecipeDetail />} />
      </Routes>
    </div>
  );
}

export default App;
