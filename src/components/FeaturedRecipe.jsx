function FeaturedRecipe({ name, description }) {
    return (
        <div className="featured-card">

            <img src="https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80" alt="Chicken Samosa"/>


            <div className="featured-content">
                <h3>{name || "Chicken Samosa"}</h3>

                <p>
                    {description || "Delicious and flavourful recipe you must try."}
                </p>

                <button>View Recipe</button>
            </div>

        </div>
    )
}

export default FeaturedRecipe