import { Img_CDN_URL } from "./contants";

export const Restrantcard = ( {name,cuisines,cloudinaryImageId,avgRatingString}) => {
 
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
    </div>
)
}

