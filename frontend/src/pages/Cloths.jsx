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
     {cloths?.length===0 ? <div>....waiting</div> : null }
      <div
        style={{
          width: "85%",
          marginLeft: "200px",
          marginTop: "40px",
          display: "flex",
          flexWrap: "wrap",
          gap: "40px",
          
        }}
      >
        {cloths.map((cloth) => {
          return (
            <div key={cloth._id}>
              <Link
                to={`/cloths/${cloth._id}`}
                style={{ textDecoration: "none" }}
              >
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
