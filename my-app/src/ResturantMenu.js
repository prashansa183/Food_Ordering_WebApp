
import { useParams } from "react-router-dom"
import { Img_CDN_URL} from "./contants";
import useResturant from "./utils/useResturant";


const PesturantMenu = () => {
  // const [res, setres] = useState(null);// i am using the useResturant .


  // how to read a dynamic url params
  const Params = useParams();
  const { resID } = Params;

  const res=useResturant(resID)

 
  if(res === null) return <shimmer/>;

 

  // const {name,cusines,costForTwoMessage }=res?.cards[2]?.card?.card?.info;

  // const {itemCards}=res?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card;
// currently cannot destructure it !

  console.log(res?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card.itemCards)
  
  return (
    
    <div className="menu">
      <h1>Resturant ID:-{resID}</h1>
      <h2>{res?.cards[2]?.card?.card?.info?.name}</h2>
      <h3>{res?.cards[2]?.card?.card?.info?.costForTwoMessage}</h3> 
      <h3>{res?.cards[2]?.card?.card?.info?.cusines}</h3>

      <h2>menu</h2>
      <ul>

        {res?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card?.itemCards.map((item)=>

        <li key={item?.card?.info?.id}>{item?.card?.info?.name} -{"Rs."}{item?.card?.info?.price/100 }</li>)}
      </ul>
    </div>  
      )
      
    }
  


export default PesturantMenu;

 