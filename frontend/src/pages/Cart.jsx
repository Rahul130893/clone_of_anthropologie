import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCart } from "../Redux/cloths.js/action";

export const Cart = () => {
  const cart = useSelector((store) => store.clothData.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cart?.length === 0) {
      dispatch(fetchCart());
    }
  }, [dispatch, cart?.length]);
  console.log(cart);
  return (
    <div>
      <Navbar />
      <div className="cartPage">
        {cart.map((e) => {
          return (
            <div key={e._id}>
              <CartItems title={e.title} price={e.price} image={e.image} />;
            </div>
          );
        })}
      </div>

      <Footer />
    </div>
  );
};

function CartItems({ image, title, price }) {
  return (
    <div className="cartItems">
      <img
        style={{ height: "100%", borderRadius: "10px" }}
        src={image}
        alt=""
      />

      <div>
        <p>Name: {title}</p>
        <p>Price: ${price}</p>
      </div>
      <div>
        <button>Remove From Cart</button>
      </div>
    </div>
  );
}
