import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { fetchCart } from "../Redux/cloths.js/action";

export const Counter = () => {
  const cart = useSelector((store) => store.clothData.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cart?.length === 0) {
      dispatch(fetchCart());
    }
  }, [cart?.length, dispatch]);

  return (
    <div style={{ marginTop: "12px", color: "#4b5666"}}>
       
      {cart?.length ? cart.length : "Your Cart is Empty"}
      
    </div>
  );
};
