import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/actions/actionProducts";
import { setProducts } from "../redux/actions/actionProducts";
import "../components/Product.css";

const Product = ({ product, addToCart }) => {
  const { id, name, description, final_price, img_url,original_price } = product;
  return (
    <div className="product">
      <Link to={`/details/${id}`}>
        <div className="img-box">
          <img src={img_url} alt="" className="images" />
        </div>
        <div className="product-details">
          <span style={{fontWeight:"bold",fontSize:"20px"}}> {name} </span>  
          <br/>
          <span style={{marginRight:"10%",color:"grey",textDecoration:"line-through"}}>${original_price} </span> <strong style={{marginLeft:"10%"}}> ${final_price}  </strong>
          <br/>
          <span style={{color:"grey"}}> {description} </span>
          <br />
          
        </div>
      </Link>
      <div className="add-btn-div">
        <button onClick={() => addToCart(id)} className="add-btn">
          Add to cart
        </button>
      </div>
    </div>
  );
};

const mapDispatchProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    setProducts: (products) => dispatch(setProducts(products)),
  };
};

export default connect(null, mapDispatchProps)(Product);
