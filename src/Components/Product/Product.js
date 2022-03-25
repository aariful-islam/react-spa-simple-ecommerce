import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name,img,price,seller,ratings}=props.product
     const handleAddToCart=props.handleAddToCart;
    return (
    
        <div className='product'>
            
            <img className='product-image' src={img}alt="" />
            <div className="product-info">
               <h2 className='product-name'>{name}</h2>
               <h5>Price :{price}</h5>
               <p>Manufacturer :{seller}</p>
               <p>Rating :{ratings} Star </p>
                
            </div>
            <button onClick={()=>handleAddToCart(props.product)} className='addToCartButton'>
               <p>
                   Add to cart
               </p>
        </button>
            
        </div>
        

            
    
       
        
    );
};

export default Product;