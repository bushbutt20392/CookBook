// Page for displaying the user's favourite recipes
import { Link } from "react-router-dom";

function Favourites({ favourites = [] }) {
    return (
        <div className="favourites-page">

            {/* Page introduction */}
            <section className="favourites-hero">
                <h1>My Favourites</h1>
                <p>Your favourite recipes in one place.</p>
            </section>

            {/* Favourite recipes */}
            <section className="favourite-recipes">
                <h2>Favourite Recipes</h2>
                <p>Recipes you love and want to cook again.</p>

                <div className="favourite-list">

                    {/* Show message when there are no favourites */}
                    {favourites.length === 0 ? (
                        <div className="saved-box">
                            <h3>No Favourite Recipes Yet</h3>

                            <p>
                                Start exploring recipes and add
                                your favourites here.
                            </p>

                            <Link
                                to="/recipes"
                                className="explore-button"
                            >
                                Explore Recipes
                            </Link>
                        </div>
                    ) : (

                        /* Display saved recipes */
                        favourites.map((recipe) => (
                            <div
                                className="favourite-card"
                                key={recipe.id}
                            >
                                {/* Recipe image */}
                                <Link
                                    to={`/recipes/${recipe.id}`}
                                >
                                    <img
                                        src={recipe.image}
                                        alt={recipe.name}
                                    />
                                </Link>

                                {/* Recipe name */}
                                <h3>{recipe.name}</h3>

                                {/* Recipe cuisine */}
                                <p>{recipe.cuisine}</p>

                                {/* Details button */}
                                <Link
                                    to={`/recipes/${recipe.id}`}
                                    className="view-recipe"
                                >
                                    View Recipe
                                </Link>
                            </div>
                        ))
                    )}

                </div>
            </section>

            {/* Favourite categories */}
            <section className="favourite-categories">
                <h2>Favourite Categories</h2>

                <p>
                    Explore some popular recipe categories.
                </p>

                <div className="favourite-category-list">

                    <div className="favourite-category">
                        <img
                            src="https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=500&q=80"
                            alt="Chicken"
                        />
                        <h3>Chicken</h3>
                    </div>

                    <div className="favourite-category">
                        <img
                            src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=500&q=80"
                            alt="Pasta"
                        />
                        <h3>Pasta</h3>
                    </div>

                    <div className="favourite-category">
                        <img
                            src="https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=500&q=80"
                            alt="Dessert"
                        />
                        <h3>Dessert</h3>
                    </div>

                </div>
            </section>

            {/* Saved recipe summary */}
            <section className="saved-recipes">
                <h2>Saved Recipes</h2>

                <p>
                    Keep your favourite recipes ready for later.
                </p>

                <div className="saved-box">
                    <h3>
                        {favourites.length}{" "}
                        {favourites.length === 1
                            ? "Recipe Saved"
                            : "Recipes Saved"}
                    </h3>

                    <p>
                        Keep exploring CookBook and discover
                        more delicious recipes.
                    </p>
                </div>
            </section>

            {/* Call to action */}
            <section className="favourites-cta">
                <h2>Discover More Recipes</h2>

                <p>
                    Find something new and delicious to add
                    to your favourites.
                </p>

                <Link
                    to="/recipes"
                    className="explore-button"
                >
                    Explore Recipes
                </Link>
            </section>

        </div>
    );
}

export default Favourites;