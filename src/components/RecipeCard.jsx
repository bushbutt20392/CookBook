import {Link} from "react-router-dom"

function RecipeCard({recipe ,name ,description }) {
    if (recipe) {
    return(
        <Link to={`/recipes/${recipe.id}`}  className="recipe-card">
            <img src={recipe.image}
         alt={recipe.name} />
         <h2>{recipe.name}</h2>
       </Link>
    )
}

return(
    <div className="recipe-card">
        <h2>{name}</h2>
        <p>{description}</p>
    </div>
  )
}

export default RecipeCard