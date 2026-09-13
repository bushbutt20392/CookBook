// Reusable card component for displaying recipes
import { Link } from "react-router-dom";

function RecipeCard({
    recipe,
    name,
    description,
    addToFavourite,
    favourites = [],
    page
}) {
    // Show a simple card when no recipe object is provided
    if (!recipe) {
        return (
            <div className="recipe-card">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        );
    }

    // Check whether this recipe is already in favourites
    const isFavourite = favourites.some(
        (item) => item.id === recipe.id
    );

    return (
        <div
            className={`recipe-card ${
                page === "all" ? "all-recipe-card" : ""
            }`}
        >
            {/* Recipe image and name open the details page */}
            <Link to={`/recipes/${recipe.id}`}>
                <img
                    src={recipe.image}
                    alt={recipe.name}
                />

                <h2>{recipe.name}</h2>
            </Link>

            {/* Add or remove the recipe from favourites */}
            <button
                onClick={() => addToFavourite(recipe)}
            >
                {isFavourite
                    ? "❤️ Favourite"
                    : "♡ Add to Favourite"}
            </button>
        </div>
    );
}

export default RecipeCard;