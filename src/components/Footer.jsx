// Footer component for the CookBook website
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>

            {/* Footer main content */}
            <div className="footer-content">

                {/* Brand information */}
                <div className="footer-brand">
                    <h2>CookBook</h2>

                    <p>
                        Discover delicious recipes, cooking ideas,
                        and meals for every occasion.
                    </p>
                </div>

                {/* Quick navigation */}
                <div className="footer-links">
                    <h3>Quick Links</h3>

                    <Link to="/">Home</Link>
                    <Link to="/recipes">Recipes</Link>
                    <Link to="/categories">Categories</Link>
                    <Link to="/favourites">Favourites</Link>
                </div>

            </div>

            {/* Copyright */}
            <div className="footer-bottom">
                <p>
                    © 2026 CookBook. All rights reserved.
                </p>
            </div>

        </footer>
    );
}

export default Footer;