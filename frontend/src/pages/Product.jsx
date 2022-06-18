


export const Product = ({title, image, price}) => {
    return (
      <div style={{ border: "1px solid red", width: "290px", height: "500px" }}>
        <img
          style={{ width: "290px", height: "400px" }}
          src={image}
          alt="img"
        />
        <p style={{color:"gray", fontSize:"14px"}}>{title}</p>
        <h3>${price}</h3>
      </div>
    );
}