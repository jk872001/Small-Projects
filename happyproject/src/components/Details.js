import React from "react";
import { useParams, Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart } from "../redux/actions/actionProducts";
import { productReducer } from "../redux/reducers/productReducer";
import "../components/Detail.css";

const Details = ({ productsAll, addToCart }) => {
  const { id } = useParams();
  let productDetails = productsAll.find(
    (item) => parseInt(item.id) === parseInt(id)
  );
  const { img_url, name, description,  final_price, original_price } = productDetails;

  return (
    <div className="details">
      <div className="inside-container">
        <div className="details-center">
          <div className="details-img">
            <img src={img_url} alt="product" />
          </div>
          <div className="details-info">
            <h2 className="details-title">
               {name}
            </h2>
            <div className="detail-phone">
              <div>
                <strong>Discount Price:</strong> <span>${final_price} </span>
              </div>
              <div>
                <strong>Original Price:</strong><span>${original_price}</span>
                
              </div>
              <div>
                <strong>Card Details: </strong>
                <span>{description}</span>
              </div>
            </div>
            <div className="details-btn">
              <Link to="/">
                <button>Back to products</button>
              </Link>
              <button onClick={() => addToCart(id)}>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateProps = (state) => {
  return {
    productsAll: state.productsAll.products,
  };
};

export default connect(mapStateProps, { productReducer, addToCart })(Details);
