import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { store } from "../Redux/store";
import { useEffect } from "react";
import { FetchData } from "../Redux/cloths.js/action";
import { Product } from "./Product";

export const Cloths = () => {
  const cloths = useSelector((store) => store.clothData.cloths);
  const dispatch = useDispatch();
  useEffect(() => {
    if (cloths?.length === 0) {
      dispatch(FetchData());
    }
  }, [dispatch, cloths?.length]);
  console.log(cloths);
  return (
    <div>
      <Navbar />
      {store.loading && <div>....loading</div>}
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
        {cloths.map((cloth) => {
          return (
            <Product
              key={cloth.id}
              image={cloth.image}
              title={cloth.title}
              price={cloth.price}
            />
          );
        })}
      </div>

      <Footer />
      <h3>clothes</h3>
    </div>
  );
};
