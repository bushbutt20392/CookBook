function CategoryCard({name , description ,image}) {
    return(
        <div className="category-card">
            <img src={image}  alt={name} />
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    )
}
export default CategoryCard