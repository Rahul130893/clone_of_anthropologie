import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletCartItmes } from "../Redux/cloths.js/action";
import { fetchCart } from "../Redux/cloths.js/action";

export const Cart = () => {
  const cart = useSelector((store) => store.clothData.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cart?.length === 0) {
      dispatch(fetchCart());
    }
  }, [dispatch, cart?.length]);

  const handleDelet = (id) => {
    console.log(id);
    dispatch(deletCartItmes(id));
  };

  return (
    <div>
      <Navbar />
      <div className="cartpagetop">
        <div>
          <div className="cartPage">
            <h1>Basket</h1>
            <div className="list">
              <div>
                <p>Item</p>
                <p>Item Price</p>
              </div>
            </div>
            {cart.map((e, i) => {
              return (
                <div key={i}>
                  <CartItems
                    title={e.title}
                    price={e.price}
                    image={e.image}
                    id={e._id}
                    handleDelet={handleDelet}
                  />
                  ;
                </div>
              );
            })}
          </div>
        </div>
        <div className="order">
          <h1>Order Summary</h1>
          <div></div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

function CartItems({ image, title, price, id, handleDelet }) {
  return (
    <div className="cartItems">
      <img
        style={{ height: "100%", borderRadius: "10px" }}
        src={image}
        alt=""
      />
      <div>
        <div>
          <p>{title}</p>
        </div>
        <div>
          <p>${price}</p>
        </div>
        <div>
          <button onClick={() => handleDelet(id)}>Remove From Cart</button>
        </div>
      </div>
    </div>
  );
}
