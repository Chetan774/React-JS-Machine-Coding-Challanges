import { useEffect, useState } from "react";
import'./productCardAPI.css'
import axios from 'axios'

export const ProductCardAPI = () =>{

  const [product, setProduct] = useState(null);
    useEffect(()=>{
     const fetchData = async () =>{
       const response = await axios('https://dummyjson.com/products/1');
       const data  = await response.data;
       console.log(data)
       setProduct(data)
     }
     fetchData();

    }, [])
   return <div className="productCard">
      <header><h3 className="header">{product?.title}</h3></header>
      <div className="body">
        <span className="item"><b>AvailabilityStatus : </b>{product?.availabilityStatus}</span>
        <span className="item"><b>Brand : </b>{product?.brand}</span>
        <span className="item"><b>Category : </b>{product?.category}</span>
        <span className="item"><b>Description : </b>{product?.description}</span>
      </div >
   </div>
}