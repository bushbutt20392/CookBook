import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Categories from "./pages/Categories";
import RecipeDetails from "./pages/RecipesDetails";
import Favourites from "./pages/Favourites";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Main application component
function App() {
    // Load saved favourites when the application starts
    const [favourites, setFavourites] = useState(() => {
        try {
            const savedFavourites = localStorage.getItem("favourites");

            return savedFavourites
                ? JSON.parse(savedFavourites)
                : [];
        } catch (error) {
            console.error("Could not load favourites:", error);
            return [];
        }
    });

    // Save favourites to localStorage whenever favourites change
    useEffect(() => {
        localStorage.setItem(
            "favourites",
            JSON.stringify(favourites)
        );
    }, [favourites]);

    // Add or remove a recipe from favourites
    function addToFavourite(recipe) {
        setFavourites((previousFavourites) => {
            const alreadyFavourite = previousFavourites.some(
                (item) => item.id === recipe.id
            );

            // If already favourite, remove it
            if (alreadyFavourite) {
                return previousFavourites.filter(
                    (item) => item.id !== recipe.id
                );
            }

            // Otherwise add it
            return [...previousFavourites, recipe];
        });
    }

    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                {/* Home page */}
                <Route
                    path="/"
                    element={
                        <Home
                            favourites={favourites}
                            addToFavourite={addToFavourite}
                        />
                    }
                />

                {/* All recipes */}
                <Route
                    path="/recipes"
                    element={
                        <Recipes
                            favourites={favourites}
                            addToFavourite={addToFavourite}
                        />
                    }
                />

                {/* Categories */}
                <Route
                    path="/categories"
                    element={<Categories />}
                />

                {/* Recipe details */}
                <Route
                    path="/recipes/:id"
                    element={<RecipeDetails />}
                />

                {/* Favourite recipes */}
                <Route
                    path="/favourites"
                    element={
                        <Favourites
                            favourites={favourites}
                        />
                    }
                />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default App;