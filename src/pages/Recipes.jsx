// Page displaying all available recipes
import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";

function Recipes({ addToFavourite, favourites = [] }) {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // Fetch all recipes from the API
    useEffect(() => {
        fetch("https://dummyjson.com/recipes")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to load recipes.");
                }

                return response.json();
            })
            .then((data) => {
                setRecipes(data.recipes || []);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <div className="recipes-page">

            {/* Page introduction */}
            <section className="recipes-hero">
                <h1>Discover Delicious Recipes</h1>

                <p>
                    Explore a variety of tasty recipes for
                    every occasion.
                </p>
            </section>

            {/* All recipes */}
            <section className="all-recipes">
                <h2>All Recipes</h2>

                <p>
                    Find your next favourite meal from our
                    collection.
                </p>

                <div className="recipe-container">

                    {/* Loading state */}
                    {loading && (
                        <p>Loading recipes...</p>
                    )}

                    {/* Error state */}
                    {!loading && error && (
                        <p>{error}</p>
                    )}

                    {/* Recipe cards */}
                    {!loading &&
                        !error &&
                        recipes.map((recipe) => (
                            <RecipeCard
                                key={recipe.id}
                                recipe={recipe}
                                addToFavourite={addToFavourite}
                                favourites={favourites}
                                page="all"
                            />
                        ))
                    }

                </div>
            </section>

            {/* Cooking inspiration */}
            <section className="cooking-inspiration">
                <h2>Cooking Inspiration</h2>

                <p>
                    Find new ideas and discover recipes
                    you will love to cook.
                </p>
            </section>

            {/* Quick recipes */}
            <section className="quick-recipes">
                <h2>Quick & Easy Recipes</h2>

                <p>
                    Simple and delicious recipes for busy days.
                </p>
            </section>

            {/* Final call to action */}
            <section className="recipes-cta">
                <h2>Ready to Cook?</h2>

                <p>
                    Choose a recipe and start cooking something
                    delicious.
                </p>
            </section>

        </div>
    );
}

export default Recipes;