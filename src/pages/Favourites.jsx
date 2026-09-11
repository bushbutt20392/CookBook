
import { Link } from "react-router-dom"
function Favourites({favourites}) {
    return(
        <div className="favourites-page">
            <section className="favourites-hero">
                <h1>My Favourites</h1>
                <p>Your favourites recipes in one place.</p>
            </section>

            <section className="favourite-recipes">
                <h2>Favourite Recipes</h2>
                <p>Recipes you love and want to cook again.</p>
                <div className="favourite-list">
                    {favourites.length === 0 ? ( <p>No favourite recipes yet.</p>) : (favourites.map((recipe) => (
                    <div className="favourite-card" key={recipe.id}>
                        <img src={recipe.image}
                        alt={recipe.name}/>
                        <h3>{recipe.name}</h3>
                        <p>{recipe.cuisine}</p>
                        <Link to={`/recipes/${recipe.id}`}  className="view-recipe">View Recipe</Link>
                    </div>
                    ))
                )}
                </div>
            </section>
            <section className="favourite-categories">
                <h2>Favourite Categories</h2>
                <p>Explore the types of recipes you enjoy most.</p>
                <div className="favourite-category-list">
                    <div className="favourite-category">
                        <h3>Chicken</h3>
                    </div>
                     <div className="favourite-category">
                        <h3>Pasta</h3>
                    </div>
                     <div className="favourite-category">
                        <h3>Dessert</h3>
                    </div>
                </div>
            </section>

            <section className="saved-recipes">
                <h2>Recently Saved</h2>
                <p>Keep your favourite recipes ready for later.</p>
                <div className="saved-box">
                    <h3>{favourites.length}Recipe Saved</h3>
                    <p>Keep exploring and add more recipes to your favourites.</p>
                </div>
            </section>

            <section className="favourites-cta">
                <h2>Discover More Recipes</h2>
                <p>Find something new and delicious to add to your favourites.</p>
                <Link to="/recipes" className="explore-button">Explore Recipes</Link>
            </section>
        </div>
    )
}

export default Favourites