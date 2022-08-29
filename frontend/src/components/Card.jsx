import {Link} from "react-router-dom"


export const Card = ({ title, image, price }) => {

    return (
      <div
        style={{
          
          width: "290px",
          height: "500px",
          color: "gray",
          textAlign:"start"
        }}
      >
        <img
          style={{ width: "290px", height: "400px" }}
          src={image}
          alt="img"
        />

        <p style={{ fontSize: "14px" }}>{title}</p>
        <h4>${price}</h4>
      </div>
    );
};
