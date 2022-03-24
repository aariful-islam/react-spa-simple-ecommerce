import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts]=useState([])
    useEffect( ()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className='shop'>
            <div className='show-products'>
                {
                    products.map(product=> <Product key={product.id} product={product}></Product>)
                }
                
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum enim aliquid ipsam exercitationem minima natus odit ratione labore unde iure!</p>

            </div>
        </div>
    );
};

export default Shop;