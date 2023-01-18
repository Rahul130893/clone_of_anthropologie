import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { fetchCart } from "../Redux/cloths.js/action";

export const Counter = () => {
  const cart = useSelector((store) => store.clothData.cart);
   const auth = useSelector((store) => store.authReducer.auth);

  const dispatch = useDispatch();
  const response = JSON.parse(localStorage.getItem("token"))

  
  
  useEffect(() => {
    if (response) {
      dispatch(fetchCart(response.user._id));
    }
  }, [cart?.length, dispatch]);

  return (
    <div style={{ marginTop: "12px", color: "#4b5666"}}>
       
      {auth ===false ? "Not logged in":  cart.length !==0 ? cart.length:"Your cart is empty"}
      
    </div>
  );
};
