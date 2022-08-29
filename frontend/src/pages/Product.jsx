import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { AddProCart, Single_FetchData } from "../Redux/cloths.js/action";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const Product = () => {
  const { _id } = useParams();

  console.log(_id);
  const dispatch = useDispatch();
  const currentProduct = useSelector((store) => store.clothData.currentProduct);

  useEffect(() => {
    if (_id) {
      dispatch(Single_FetchData(_id));
    }
  }, [dispatch, _id]);
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
