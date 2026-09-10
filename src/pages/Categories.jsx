import categoryCard from "../components/CategoryCard"

function Categories() {
    return (
        <div className="categories-page">
            <section className="categories-hero">
                <h1>Recipe Categories</h1>
                <p>Explore delicious recipes by category.</p>
            </section>
            <section className="main-categories">
                <h2>Popular Categories</h2>
                <p>Chosw a category and discover new recipes.</p>
        
                 <div className="category-container">
                   <categoryCard name="Chicken" descruiption="Delicious chicken recipes." />
                   <categoryCard name="Pasta" descruiption="Delicious pasta recipes." />
                   <categoryCard name="Salad" descruiption="Fresh and healthy salad recipes." />
                   <categoryCard name="Dessert" descruiption="Sweet and delicious dessert recipes." />
                 </div>
            </section>
            <section className="meal-types">
                <p>Find recipes for every meal of the day.</p>
                <div className="meal-list">
                    <div className="meal-card">
                        <h3>Breakfast</h3>
                        <p>Start your day with tasty breakfast ideas.</p>
                    </div>
                    <div className="meal-card">
                        <h3>Lunch</h3>
                        <p>Enjoy delicious recipes for your lunch. </p>
                    </div>
                    <div className="meal-card">
                        <h3>Dinner</h3>
                        <p>Find easy and delicious dinner recipes. </p>
                    </div>
                </div>
            </section>

            <section className="special-categories">
                <h2>Special Categories</h2>
                <p>Explore recipes for different food preferences.</p>
                <div className="special-list">
                <div className="special-card">
                    <h3>Healthy</h3>
                    <p>Fresh and healthy recipe ideas.</p>
                </div>
                <div className="special-card">
                    <h3>Quick & Easy</h3>
                    <p>Simple Recipes for busy days.</p>
                </div>
                <div className="special-card">
                    <h3>Vegetarian</h3>
                    <p>Delicious vegetable-based recipes.</p>
                </div>
                </div>
            </section>

            <section className="category-cta">
                <h2>Ready to Cook?</h2>
                <p>Explore our recipes and find something delicous to make today.</p>
                <button>Explore Recipes</button>
            </section>
        </div>
    )
}

export default Categories