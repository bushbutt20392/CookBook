// Page for displaying complete information about one recipe
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function RecipeDetails() {
    const { id } = useParams();

    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // Fetch the selected recipe
    useEffect(() => {
        setLoading(true);
        setError("");

        fetch(`https://dummyjson.com/recipes/${id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Recipe could not be found.");
                }

                return response.json();
            })
            .then((data) => {
                setRecipe(data);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    return (
        <div className="recipe-details">

            {/* Page heading */}
            <h1>Recipe Details</h1>

            {/* Loading message */}
            {loading && (
                <p>Loading recipe...</p>
            )}

            {/* Error message */}
            {!loading && error && (
                <p>{error}</p>
            )}

            {/* Recipe information */}
            {!loading && !error && recipe && (
                <div className="details-card">

                    {/* Recipe image */}
                    <img
                        src={recipe.image}
                        alt={recipe.name}
                    />

                    {/* Recipe name */}
                    <h2>{recipe.name}</h2>

                    {/* Recipe information */}
                    <p>
                        <strong>Cuisine:</strong>{" "}
                        {recipe.cuisine}
                    </p>

                    <p>
                        <strong>Difficulty:</strong>{" "}
                        {recipe.difficulty}
                    </p>

                    <p>
                        <strong>Prep Time:</strong>{" "}
                        {recipe.prepTimeMinutes} minutes
                    </p>

                    <p>
                        <strong>Cook Time:</strong>{" "}
                        {recipe.cookTimeMinutes} minutes
                    </p>

                    {/* Ingredients */}
                    <h3>Ingredients</h3>

                    <ul>
                        {recipe.ingredients?.map(
                            (ingredient, index) => (
                                <li key={index}>
                                    {ingredient}
                                </li>
                            )
                        )}
                    </ul>

                    {/* Instructions */}
                    <h3>Instructions</h3>

                    <ol>
                        {recipe.instructions?.map(
                            (instruction, index) => (
                                <li key={index}>
                                    {instruction}
                                </li>
                            )
                        )}
                    </ol>

                    {/* Back to recipes */}
                    <Link
                        to="/recipes"
                        className="explore-button"
                    >
                        Back to Recipes
                    </Link>

                </div>
            )}
        </div>
    );
}

export default RecipeDetails;