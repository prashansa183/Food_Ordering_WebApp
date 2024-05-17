import { Img_CDN_URL } from "./contants";

export const FoodItem = ( {name,description,cloudinaryImageId,price}) => {
 
  return (
    <div className="card">
      <img className="food-img" 
      src={
        Img_CDN_URL +cloudinaryImageId
      } 
      />
      <h2>{name}</h2>
       <h3>{cuisines.join(', ')}</h3>
      <h4>{avgRatingString} starts</h4>
      <h1>{description}</h1> 
      <h1>Rs-{price}/100</h1> 
    </div>
)
}

export default FoodItem;