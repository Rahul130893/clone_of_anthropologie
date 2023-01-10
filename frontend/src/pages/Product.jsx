import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { AddProCart, Single_FetchData } from "../Redux/cloths.js/action";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const Product = () => {
  const [clicked, setClicked]= useState(false)
  const auth = useSelector((store) => store.authReducer.auth);
  const error = useSelector((store) => store.clothData.error);
   const response = JSON.parse(localStorage.getItem("token"));


  const { _id } = useParams();

 // console.log(_id);
  const dispatch = useDispatch();
  const currentProduct = useSelector((store) => store.clothData.currentProduct);

  useEffect(() => {
    if (_id) {
      dispatch(Single_FetchData(_id));
    }
  }, [dispatch, _id]);
    console.log("current",currentProduct);
    
  const addHandler = () => {
    setClicked(true)
      currentProduct && dispatch(AddProCart(currentProduct));
  }

  console.log(error)

  return (
    <div>
      <Navbar />
      <br />
      <br />
      {error != "" && clicked ? (
        <div className="addedToCartError">Already added</div>
      ) : error === "" && clicked ? (
        <div className="addedToCart">Added To Your Cart</div>
      ) : null}

      <div className="productBox">
        <div style={{ width: "50%", height: "100%" }}>
          <img
            style={{ width: "100%", height: "100%" }}
            src={currentProduct.image}
            alt="img"
          />
        </div>
        <div className="detailBox">
          <div>
            <p>Name:- {currentProduct.title}</p>
            <p>Price:- ${currentProduct.price}</p>
          </div>

          <button
            disabled={response === null ? true : false}
            onClick={addHandler}
          >
            Add To Basket{" "}
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};
