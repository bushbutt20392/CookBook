// Reusable card component for displaying a recipe category
function CategoryCard({ name, description, image }) {
    return (
        <div className="category-card">

            {/* Category image */}
            <img
                src={image}
                alt={name}
            />

            {/* Category information */}
            <div className="category-card-content">
                <h3>{name}</h3>

                <p>{description}</p>
            </div>

        </div>
    );
}

export default CategoryCard;