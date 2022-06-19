import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchData } from "../Redux/cloths.js/action";
import { Card } from "../components/Card";
import { fetchCart } from "../Redux/cloths.js/action";

export const Cart = () => {
  const cart = useSelector((store) => store.clothData.cart);
  //   const dispatch = useDispatch();

  //   useEffect(() => {

  //       dispatch(fetchCart());

  //   }, [dispatch, cart?.length]);
  console.log(cart);
  return (
    <div>
      <Navbar />
      <div
        style={{
          width: "85%",
          marginLeft: "200px",
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          border: "1px solid black",
        }}
      >
        { 
          cart.map((e) => {
            return <CartItems key={e.id} title={e.title} price={e.price} />;
          })}
      </div>

      <Footer />
    </div>
  );
};

function CartItems(image, title, price) {
  return (
    <div
      style={{
        width: "85%",
        marginLeft: "200px",
        display: "flex",
        flexWrap: "wrap",
        gap: "30px",
        border: "1px solid black",
      }}
    >
      <div>
        <img src={image} alt="" />
        <p>{title}</p>
        <h3>{price}</h3>
      </div>
    </div>
  );
}
