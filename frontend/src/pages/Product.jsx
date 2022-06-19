import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { AddProCart, Single_FetchData } from "../Redux/cloths.js/action";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const Product = () => {
  const { id } = useParams();

  console.log(id);
  const dispatch = useDispatch();
  const currentProduct = useSelector((store) => store.clothData.currentProduct);

  useEffect(() => {
    if (id) {
      dispatch(Single_FetchData(id));
    }
  }, [dispatch, id]);
    console.log(currentProduct);
    
    const addHandler = () => {
        alert("product added")
        currentProduct && dispatch(AddProCart(currentProduct))
    }
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <div
        style={{
          width: "75%",
          border: "1px solid red",
          height: "700px",
          margin: "auto",
          display: "flex",
        }}
      >
        <div style={{ width: "60%", height: "100%" }}>
          <img
            style={{ width: "80%", height: "80%" }}
            src={currentProduct.image}
            alt="img"
          />
          <p>{currentProduct.title}</p>
          <h3>${currentProduct.price}</h3>
        </div>
        <div style={{ width: "40%", height: "100%" }}>
          <p style={{ fontSize: "25px" }}>Name:- {currentProduct.title}</p>
          <p style={{ fontSize: "20px" }}>Price:- ${currentProduct.price}</p>
          <button onClick={addHandler}
            style={{
              background: "#4b5666",
              color: "white",
              padding: "15px 60px",
                border: "none",
              cursor: "pointer"
            }}
          >
            Add To Basket{" "}
          </button>
        </div>
      </div>

      <Footer />    
    </div>
  );
};
