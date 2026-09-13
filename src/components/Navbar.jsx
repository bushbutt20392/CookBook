import { Link, NavLink } from "react-router-dom";

// Navigation bar for the CookBook website
function Navbar() {
    return (
        <nav className="nav">

            {/* CookBook logo / brand */}
           <Link to="/" className="nav-logo">
                 <span className="logo-icon">🍳</span>
                 <span>CookBook</span>
            </Link>

            {/* Main navigation links */}
            <div className="nav-links">

                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "active-link" : ""
                    }
                >
                    Home
                </NavLink>

                <NavLink
                    to="/recipes"
                    className={({ isActive }) =>
                        isActive ? "active-link" : ""
                    }
                >
                    Recipes
                </NavLink>

                <NavLink
                    to="/categories"
                    className={({ isActive }) =>
                        isActive ? "active-link" : ""
                    }
                >
                    Categories
                </NavLink>

                <NavLink
                    to="/favourites"
                    className={({ isActive }) =>
                        isActive ? "active-link" : ""
                    }
                >
                    Favourites
                </NavLink>

            </div>

        </nav>
    );
}

export default Navbar;