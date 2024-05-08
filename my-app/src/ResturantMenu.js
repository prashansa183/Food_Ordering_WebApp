
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Img_CDN_URL } from "./contants";

const PesturantMenu = () => {
  const Params = useParams();
  const { resID } = Params;

  useEffect(() => {
    getResturantInfo();  
  }, []);

  
  const [res, setres] = useState()

  async function getResturantInfo() {
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.59080&lng=85.13480&restaurantId"+{resID});
    const json = await data.json();
    console.log(json.data)
    setres(json.data)
  }

  return (
    <>
    <div className="menu">
      <h1>Resturant ID:-{resID}</h1>
      {/* {console.log( resID)} */}
       <h2>{res?.data?.card?.name}</h2>
{/*
      <img src={ Img_CDN_URL + res.cloudinaryImageId}/>
      <h3>{res.locality}</h3>
      <h3>{res.areaName}</h3>
      <h3>{res.city}</h3>
      <h3>{res.avgRating}</h3>
      <h3>{res.costForTwo}</h3> */}
    </div>
    <div>

      {/* <h1>Menu</h1>
      <ul>
        {Object.values.apply(res?.menu?.item).map((item)=>(
        <li key ={item.id}>{item.name}</li>
        ))}
      </ul> */}
    </div>
    </>  
  )
}

export default PesturantMenu;

 