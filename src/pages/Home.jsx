import RecipeCard from "../components/RecipeCard"
import CategoryCard from "../components/CategoryCard"
import FeaturedRecipe from "../components/FeaturedRecipe"
import WhyCookBook from "../components/whyCookBook"
import Newsletter from "../components/Newsletter"

function Home() {
    return (
        <div>
        <section className="hero">
              <h1> Welcome to CookBook</h1>
              <p>Discover delicious and easy recipes for everyone.</p>
              <button> Explore Recipes</button>
        </section>

          <section className="pop-recipes">
              <h2> Popular Recipes</h2>
              <p>Explore some of our most popular Recipes.</p>

              <div className="recipe-list">
               <RecipeCard name="Chicken Biryani"   description="Delicious Pakistani rice dish."/>
               <RecipeCard name="Pasta"   description="Creamy and tasty pasta."/>
               <RecipeCard name="Chocolate cake"   description="Soft and delicious chocolte cake."/>
               </div>              
        </section>

           <section className="categories"> 
              <h2> Categories</h2>
              <p>Browse recipes by category.</p>
              <div className="category-list">
              <CategoryCard name="Chicken"    description="Delicious chicken recipes." />
              <CategoryCard name="Pasta"     description="Delicious Pasta recipes." />
              <CategoryCard name="Salad"     description="Fresh and healthy salad recipes." />
              <CategoryCard name="Dessert"   description=" Sweet and Delicious dessert recipes."/>
              </div>
        </section>

          <section className="featured-recipe">
            <h2> Featured Recipe</h2>
              <p>Try our special recipe of the day.</p>
              <FeaturedRecipe />
        </section>

          <section className="why-book">
              <h2> Why CookBook</h2>
              <p>Discover  why CookBook is a great place for food lovers.</p>
              <WhyCookBook />
        </section>

          <section className="newsletter">
              <h2> Newsletters</h2>
              <p>Subscribe to get new recipes and cooking ideas.</p>
              <Newsletter />
        </section>
        </div>
    )
        
    
}
export default Home