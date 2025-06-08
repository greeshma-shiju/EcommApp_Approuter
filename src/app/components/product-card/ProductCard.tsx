"use client"
import React,{useEffect, useState} from 'react'
import Link from "next/link";
import { useRouter } from 'next/navigation';

export default function ProductCard(props:any) {
    var prod=props.product;
    const[selectedProduct, setSelectedProduct] = useState({});
    const selectProd=()=>{
      console.log("Selecting prod:",prod);
      setSelectedProduct(prod);
    }
    useEffect(()=>{
      fetch('https://fakestoreapi.com/products/1')
    },[])

  



  return (
     <Link href={`/products/${prod.id}`} style={{ textDecoration: 'none' }}>
    
      <div className="card h-100" onClick={selectProd} style={{ paddingTop: '90px'}}>
        <img
          src={prod.image}
          className="card-img-top p-3"
          alt={prod.title}
          style={{ height: '200px', objectFit: 'contain' }}
        />
        <div className="card-body">
          <h5 className="card-title" style={{ fontSize: '1rem' }}>
            {prod.title}
          </h5>
        </div>
      </div>
    </Link>
  );
}

