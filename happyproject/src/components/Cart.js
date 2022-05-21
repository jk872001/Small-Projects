import React, { useEffect, useState } from "react";
import rmv from "../assets/images/remove.svg";
import inc from "../assets/images/increase.png";
import decr from "../assets/images/decrease.png";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../components/Cart.css";
import {
  removeCart,
  itemIncrease,
  itemDecrease,
  emptycart,
} from "../redux/actions/actionProducts";
import { useDispatch } from "react-redux";

const Cart = ({ cart, removeCart, itemIncrease, itemDecrease }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const dispatch = useDispatch()

  useEffect(() => {
    let items = 0;
    let price = 0;
    cart.forEach((item) => {
      items += item.quantity;
      price += (item.quantity * item.final_price)-18+5;
    });
    setTotalPrice(price);
    setTotalItems(items);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return (
    <div className="cart-container">
     <Link to="/">
              <button className="contine-btn">Back to Shopping</button>
            </Link>
      {cart.length === 0 ? (
        <h3>Cart is currently empty</h3>
      ) : (
        <>
          {" "}
          <div className="cart-list-head">
            <strong className="head-product">Product</strong>
            <strong className="head-price">Price</strong>
            <strong className="head-total">Total</strong>
          </div>
          {cart.map((item) => (
            <>
              <div className="cart-list" key={item.id}>
                <div className="cart-info">
                  <div className="item-img">
                    <img src={item.img_url} className="img-cart" alt="img" />
                  </div>
                  <div className="product-info">
                    <div className="product_inf_detail">
                      <strong>{item.name}</strong>
                    </div>
                    <div className="price">
                      <strong className="price-child">${item.final_price} </strong>
                    </div>
                    <div className="price total">
                      <strong>${item.final_price * item.quantity} </strong>
                    </div>
                    <div className="quantity">
                      <div className="quantity-inside">
                        <a onClick={() => itemIncrease(item.id)}>
                          <img src={inc} alt="increase" className="increase" />
                        </a>
                        <span>{item.quantity}</span>
                        {item.quantity === 1 ? (
                          <a onClick={() => removeCart(item.id)}>
                            <img
                              src={decr}
                              alt="decrease"
                              className="decrease"
                            />
                          </a>
                        ) : (
                          <a onClick={() => itemDecrease(item.id)}>
                            <img
                              src={decr}
                              alt="decrease"
                              className="decrease"
                            />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="hover-remove">
                    <div className="delete-product">
                      <a onClick={() => removeCart(item.id)}>
                        {" "}
                        <img src={rmv} alt="icon" className="rmv-icon" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </>
      )}

      {cart.length === 0 ? null : (
        <div className="total-cart">
          
          <span className="total-text">Total Savings</span>
          <span>-$ 18.00 </span>
          <span className="total-text">Delivery Fees</span>
          <span>$ 5.00 </span>
          <span className="total-text">Total:</span>
          <span>${totalPrice} </span>
          <div className="check-div-btn">
            <Link to="/">
              <button className="contine-btn">Contine Shopping</button>
            </Link>
            
            <Link to="/"><button 
            onClick={()=>dispatch(emptycart([]))}
            className="check-btn">Checkout Now</button></Link>

          </div>
        </div>
      )}
    </div>
  );
};

const mapStateProps = (state) => {
  return {
    cart: state.productsAll.cart,
  };
};

export default connect(mapStateProps, {
  removeCart,
  itemIncrease,
  itemDecrease,
})(Cart);
