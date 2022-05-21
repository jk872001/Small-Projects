import React from "react";
import { connect } from "react-redux";
import Product from "./Product";
import { productReducer } from "../redux/reducers/productReducer";
import "../components/Product.css";
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';

const Products = ({ productsAll }) => {
  return (
    <div>
     <div style={{width:"300px",marginLeft:"40%"}}>
           <h1>Most Popular</h1>
           <div style={{display:"flex", marginLeft:"13%",color:"#1D7CBF"}}>
               <div>--------</div>
               <div><StarBorderOutlinedIcon/></div>
               <div>--------</div>
        </div>  
        </div>   
     
    <div className="product-center">
    
      {productsAll.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
    </div>
  );
};

const mapStateProps = (state) => ({
  productsAll: state.productsAll.products,
});

export default connect(mapStateProps, { productReducer })(Products);
