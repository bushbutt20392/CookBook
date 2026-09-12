import { useState , useEffect } from "react"
import RecipeCard from "../components/RecipeCard";

function Recipes({ addToFavourite,favourites }) {
    const [recipes , SetRecipes] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/recipes")
        .then((response) => response.json())
        .then((data) => SetRecipes(data.recipes));
    } , []);

    return (
        <div className="recipes-page">
            <section className="recipes-hero">
                <h1>Discover Delicious Recipes</h1>
                <p>Explore a variety of tasty recipes for every occasion.</p>
            </section>
            <section className="all-recipes">
                <h2>All Recipes</h2>
                  <div className="recipe-container">
                {recipes.map((recipe) => (
                   <RecipeCard 
                   key={recipe.id} 
                   recipe={recipe}
                   addToFavourite={addToFavourite}
                   favourites={favourites}
                   page="all" /> 
                ))}
            </div>
            </section>
             <section className="cooking-inspiration">
                <h2>Cooking Inspiration</h2>
                <p>Find new ideas and discover recioes you will love to cook.</p>
             </section>
             <section className="quick-recipes">
                <h2>Quick and Easy Recipes </h2>
                <p>Simple and delicious recipes for busy days.</p>
             </section>

             <section className="recipes-cta">
                <h2>ready to cook?</h2>
                <p>Choose a recipe and start cooking something delicious.</p>
             </section>
          
        </div>
    )
}


export default Recipes