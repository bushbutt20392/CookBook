import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import RecipeCard from "../components/RecipeCard"
import CategoryCard from "../components/CategoryCard"
import FeaturedRecipe from "../components/FeaturedRecipe"
import WhyCookBook from "../components/whyCookBook"
import Newsletter from "../components/Newsletter"

function Home() {
  const [recipes , SetRecipes] = useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
    .then((Response) => Response.json())
    .then((data) => {
      SetRecipes(data.recipes)
    })
  }, [])
    return (
        <div>
        <section className="hero">
              <h1> Welcome to CookBook</h1>
              <p>Discover delicious and easy recipes for everyone.</p>
              <Link to="/recipes" className="explore-button">Explore Recipes</Link>
        </section>

          <section className="pop-recipes">
              <h2> Popular Recipes</h2>
              <p>Explore some of our most popular Recipes.</p>

              <div className="recipes-list">
                  {recipes.slice(0,6).map((recipe) => (<RecipeCard key={recipe.id}  recipe={recipe}/>
                ))} 
                </div>         
        </section>

           <section className="categories"> 
              <h2> Categories</h2>
              <p>Browse recipes by category.</p>
              <div className="category-list">
              <CategoryCard
    name="Chicken"
    description="Delicious chicken recipes."
    image="https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80"
/>

<CategoryCard
    name="Pasta"
    description="Delicious Pasta recipes."
    image="https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?auto=format&fit=crop&w=600&q=80"
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