import { useParams } from "react-router-dom"
import { useState , useEffect } from "react"

function RecipeDetails() {
    const { id } = useParams()

    const[recipe , SetRecipe] = useState(null)

    useEffect(() => {
           fetch(`https://dummyjson.com/recipes/${id}`)
           .then((Response) => 
        Response.json())
           .then((data) => SetRecipe(data))
    },[id])
    return(
        <div className="recipe-details">
        <h1> Recipe Details</h1>
        {recipe && (
            <div className="details-card">
                <img src={recipe.image}  alt={recipe.name} />
                 <h2>{recipe.name}</h2>
                  <h3>Ingredients</h3>
                  <ul>
                    {recipe.ingredients.map((ingredient , index) => (
                             <li key={index}>{ingredient}</li>
                    ))}
                  </ul>

                  <h3>Instructions</h3>
                  <p>{recipe.instructions}</p>
                </div>
        )}
        </div>
    )
}
export default RecipeDetails