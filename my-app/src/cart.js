import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "./utils/cartSlice";
// import { clearCart } from "./utils/cartSlice";
const Cart = () => {
  const cartItem = useSelector(store => store.cart.items)
  const dispatch = useDispatch()
  const HandelClearCart = () => {
    dispatch(clearCart());
  }
  return (
    <div>
      <h1>
        This is cart-{cartItem.length}
      </h1>
      <button className="bg-green-100" onClick={() => HandelClearCart()}>clearCart</button>

      <div className="flex">
        {cartItem.map((item) => (

          <FoodItem key={item.id}{...item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;