// Categories page for exploring recipes by category
import { Link } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";

function Categories() {
    return (
        <div className="categories-page">

            {/* Page introduction */}
            <section className="categories-hero">
                <h1>Recipe Categories</h1>

                <p>
                    Explore delicious recipes by category.
                </p>
            </section>

            {/* Popular categories */}
            <section className="main-categories">
                <h2>Popular Categories</h2>

                <p>
                    Choose a category and discover new recipes.
                </p>

                <div className="category-container">

                    <CategoryCard
                        name="Chicken"
                        description="Delicious chicken recipes."
                        image="https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=600&q=80"
                    />

                    <CategoryCard
                        name="Pasta"
                        description="Delicious pasta recipes."
                        image="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=600&q=80"
                    />

                    <CategoryCard
                        name="Salad"
                        description="Fresh and healthy salad recipes."
                        image="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80"
                    />

                    <CategoryCard
                        name="Dessert"
                        description="Sweet and delicious dessert recipes."
                        image="https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=600&q=80"
                    />

                </div>
            </section>

            {/* Meal type categories */}
            <section className="meal-types">
                <h2>Meal Types</h2>

                <p>
                    Find recipes for every meal of the day.
                </p>

                <div className="meal-list">

                    <div className="meal-card">
                        <h3>Breakfast</h3>
                        <p>
                            Start your day with tasty breakfast ideas.
                        </p>
                    </div>

                    <div className="meal-card">
                        <h3>Lunch</h3>
                        <p>
                            Enjoy delicious recipes for your lunch.
                        </p>
                    </div>

                    <div className="meal-card">
                        <h3>Dinner</h3>
                        <p>
                            Find easy and delicious dinner recipes.
                        </p>
                    </div>

                </div>
            </section>

            {/* Special categories */}
            <section className="special-categories">
                <h2>Special Categories</h2>

                <p>
                    Explore recipes for different food preferences.
                </p>

                <div className="special-list">

                    <div className="special-card">
                        <h3>Healthy</h3>
                        <p>
                            Fresh and healthy recipe ideas.
                        </p>
                    </div>

                    <div className="special-card">
                        <h3>Quick & Easy</h3>
                        <p>
                            Simple recipes for busy days.
                        </p>
                    </div>

                    <div className="special-card">
                        <h3>Vegetarian</h3>
                        <p>
                            Delicious vegetable-based recipes.
                        </p>
                    </div>

                </div>
            </section>

            {/* Call to action */}
            <section className="category-cta">
                <h2>Ready to Cook?</h2>

                <p>
                    Explore our recipes and find something
                    delicious to make today.
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

export default Categories;