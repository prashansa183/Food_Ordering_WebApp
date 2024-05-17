
import { useEffect, useState } from "react";
import { menuAPI } from "../contants";

const useResturant=(resID)=>{
  const [res, setres] = useState(null)

  //get data from API
  useEffect(() => {
    getResturantInfo();  
  }, []);
 


  async function getResturantInfo() {
    const data = await fetch(menuAPI+resID);
    console.log(resID)
    const json = await data.json();
    console.log(json)
    setres(json.data)
  };
  

//return resturant data
return res;
}
export default useResturant;