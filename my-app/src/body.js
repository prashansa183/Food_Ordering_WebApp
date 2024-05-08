import { Restaurantlist } from "./App";
import { Restrantcard } from "./ResturantCard";
import { useState, useEffect } from "react";
// import shimmer from "./shimmer";


function filterData(searchtext, restaurants) {
  const filterData = restaurants.filter((restaurant) => restaurant?.info?.name?.toLowerCase()?.includes(searchtext.toLowerCase()))
  return filterData
}

function Body() {

  const [allresturant, setallresturant] = useState([]);
 
  // const [allresturant, setallresturant] = useEffect([]);

  const [filterrestaurant, setfilterResturant] = useState([]);

  const [searchtext, setSearchText] = useState("");

  useEffect(() => {
    getResturant();
  }, []);

  async function getResturant() {

  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.59080&lng=85.13480&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    console.log(json);

    setallresturant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    setfilterResturant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  //  


  return (
    <>
      <div className="search-container  ">
        <input type="text"
          className="search-input"
          placeholder="search"
          value={searchtext}
          onChange={(e) => {
            setSearchText(e.target.value);
          } } />
        <button className="search-btn"
          onClick={() => {
            const data = filterData(searchtext, allresturant);
            setfilterResturant(data);
          } }
        >search</button>
      </div>
      <div className="Resturant-list">
        {filterrestaurant.map((restaurant) => {
          return <Restrantcard {...restaurant.info} key={restaurant.info.id} />;
        }
        )}


        {/* <Restrantcard {...Restaurantlist[1].info}/>
          <Restrantcard {...Restaurantlist[2].info}/>
          <Restrantcard {...Restaurantlist[3].info}/>
          <Restrantcard {...Restaurantlist[4].info}/>
          <Restrantcard {...Restaurantlist[5].info}/> */}
          
      </div>
    </>);

}
export default Body;