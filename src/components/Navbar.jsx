import { Link } from "react-router-dom";  

function Navbar() {
    return(
        <nav>
            <Link to="/"> Home</Link>
              <Link to="/recipes"> Recipes</Link>
                <Link to="/categories"> Categories</Link>
                  <Link to="/favourites"> Favourites</Link>
        </nav>
    )
}

export default Navbar