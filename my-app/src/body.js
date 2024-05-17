import { Restaurantlist } from "./App";
import { Restrantcard } from "./ResturantCard";
import { useState, useEffect,useContext } from "react";
// import shimmer from "./shimmer";
import {Link, useOutlet} from "react-router-dom"; 
import{filterData} from "./utils/helper";
import useOnline from "./utils/useOnline";
import UserContext from "./utils/User_Context";

function Body() {

  const [allresturant, setallresturant] = useState([]);
 
  // const [allresturant, setallresturant] = useEffect([]);

  const [filterrestaurant, setfilterResturant] = useState([]);

  const [searchtext, setSearchText] = useState("");

  const {user,setuser}=useContext(UserContext); 

  useEffect(() => {
    getResturant();
  }, []);

  const isOnline=useOnline();
   if(!isOnline){
  return <h1>offline, please check your internet connection</h1>
}

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

        <input className="border-black" value={user.name} onChange={ e=>setuser({
          name:e.target.value,
        })}></input>

      </div>
      <div className="Resturant-list">


          
        {filterrestaurant.map((restaurant) => (
          
          <Link
          key={restaurant.info.id}
          to={"/restaurant/"+restaurant.info.id}
          >
          
            <Restrantcard {...restaurant.info} />;
          </Link>
        )
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