import { useState } from "react"
import { BrowserRouter,Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Recipes from "./pages/Recipes"
import Categories from "./pages/Categories"
import RecipeDetails from "./pages/RecipesDetails"
import Favourites from "./pages/Favourites"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  const [favourites , setFavourites] = useState([])

  function addToFavourite(recipe){
    setFavourites((previousFavourites) => {
      const alreadyFavourite = previousFavourites.some((item) => item.id === recipe.id)
      if (alreadyFavourite){
        return previousFavourites
      }
      return[...previousFavourites, recipe]
    })
  }
  return (
    <BrowserRouter>
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
       <Route path="/recipes" element={<Recipes  favourites={favourites}  addToFavourite={addToFavourite} />} />
        <Route path="/categories" element={<Categories />} />
         <Route path="/recipeDetails" element={<RecipeDetails />} />
          <Route path="/favourites" element={<Favourites    favourites={favourites}/>} />
           <Route path="/recipes/:id" element={<RecipeDetails/>} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App