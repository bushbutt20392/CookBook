import { Link } from "react-router-dom"

function RecipeCard({ recipe, name, description, addToFavourite, favourites, page }) {

    if (recipe) {

        const isFavourite = favourites?.some((item) => item.id === recipe.id)

        return (
            <div className={`recipe-card ${page === "all" ? "all-recipe-card" : ""}`}>

                <Link to={`/recipes/${recipe.id}`}>
                    <img
                        src={recipe.image}
                        alt={recipe.name}
                    />

                    <h2>{recipe.name}</h2>
                </Link>

                <button onClick={() => addToFavourite(recipe)}>
                    {isFavourite ? "❤️ Favourite" : "♡ Add to Favourite"}
                </button>

            </div>
        )
    }

    return (
        <div className="recipe-card">
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    )
}

export default RecipeCard