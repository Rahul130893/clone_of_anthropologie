import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { fetchCart } from "../Redux/cloths.js/action";

export const Counter = () => {
  const cart = useSelector((store) => store.clothData.cart);
   const auth = useSelector((store) => store.authReducer.auth);

  const dispatch = useDispatch();
  const response = JSON.parse(localStorage.getItem("token"))

 console.log("c",auth)
  useEffect(() => {
    if ( response) {
      dispatch(fetchCart(response.user._id));
    }
  }, [cart?.length, dispatch]);

  return (
    <div style={{ marginTop: "12px", color: "#4b5666"}}>
       {response=== false ? null : cart?.length ? cart.length:"Your Cart is empty"}
      {/* {cart?.length ? cart.length : "Your Cart is Empty"} */}
      
    </div>
  );
};
