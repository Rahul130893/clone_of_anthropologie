import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { store } from "../Redux/store";
import { useEffect } from "react";
import { FetchData } from "../Redux/cloths.js/action";
// import { Product } from "./Product";
//import { useParams } from "react-router-dom"
import { Card } from "../components/Card";
import { Link } from "react-router-dom";

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
            <div key={cloth.id}>
              <Link to={`/cloths/${cloth.id}`}>
                <div>
                  <Card
                    image={cloth.image}
                    title={cloth.title}
                    price={cloth.price}
                  />
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      <Footer />
      <h3>clothes</h3>
    </div>
  );
};
