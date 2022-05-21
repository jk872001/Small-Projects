import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../components/Navbar.css";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
const Navbar = ({ cart }) => {
  return (
    <div className="navbar">
      <nav className="nav">
        <div className="link-navigation">
          <ul className="links-nav">
            <li>
              <Link to="/">
              <img src={"https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/blue_logo.svg"} alt="" className="images" />
                <span>Happay</span>
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/cart">
        <div style={{display:"flex"}}>
          <div className="div-icon">
         
            <span>Cart</span>
            <div className="cart-icon">
               {cart.length!==0?<div className="cart">
               <div className="cart-count">{cart.length}</div>
               
              </div>:""} 
              
            </div>
            
          </div>
          <div > <AccountCircleOutlinedIcon sx={{ fontSize: 55 ,}}/></div>
          </div>
        </Link>
      </nav>
    </div>
  );
};

const mapStateProps = (state) => {
  return {
    cart: state.productsAll.cart,
  };
};

export default connect(mapStateProps)(Navbar);
