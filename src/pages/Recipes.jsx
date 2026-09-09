import { useState , useEffect } from "react"
import RecipeCard from "../components/RecipeCard";

function Recipes() {
    const [recipes , SetRecipes] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/recipes")
        .then((response) => response.json())
        .then((data) => SetRecipes(data.recipes));
    } , []);

    return (
        <div className="recipes-page">
            <h1>Recipes</h1>
            <div className="recipe-container">
                {recipes.map((recipe) => (
                   <RecipeCard 
                   key={recipe.id} 
                   recipe={recipe} /> 
                ))}
            </div>
        

        </div>
    )
}


export default Recipes