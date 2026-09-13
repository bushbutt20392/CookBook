// Component for displaying the featured recipe
import { Link } from "react-router-dom";

function FeaturedRecipe({ name, description }) {
    return (
        <div className="featured-card">

            {/* Featured recipe image */}
            <img
                src="https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80"
                alt="Chicken Samosa"
            />

            <div className="featured-content">

                {/* Recipe name */}
                <h3>
                    {name || "Chicken Samosa"}
                </h3>

                {/* Recipe description */}
                <p>
                    {description ||
                        "Delicious and flavourful recipe you must try."}
                </p>

                {/* Go to recipes page */}
                <Link
                    to="/recipes"
                    className="explore-button"
                >
                    View Recipes
                </Link>

            </div>
        </div>
    );
}

export default FeaturedRecipe;