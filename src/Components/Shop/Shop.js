import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts]=useState([])
    const [cart,setCart]=useState([])
    useEffect( ()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    const handleAddToCart = (product) =>{
       
        // do not do this: cart.push(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }

    
    return (
        <div className='shop'>
            <div className='show-products'>
                {
                    products.map(product=> <Product 
                        key={product.id} product={product}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                }
                
            </div>
            <div>
             <h3>Total {cart.length}</h3>

            </div>
        </div>
    );
};

export default Shop;