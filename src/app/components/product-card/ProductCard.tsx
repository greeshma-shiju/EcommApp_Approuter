'use client';
import React from 'react';
import Link from 'next/link';

type Product = {
  id: number;
  title: string;
  image: string;
  category: string;
};

export default function ProductCard(props: { product: Product }) {
  const prod = props.product;

  const selectProd = () => {
    console.log('Selected product:', prod);
  };

  return (
    <div className="card h-100" onClick={selectProd} style={{ paddingTop: '90px' }}>
      <img
        src={prod.image}
        className="card-img-top p-3"
        alt={prod.title}
        style={{ height: '200px', objectFit: 'contain' }}
      />
      <div className="card-body">

        <p style={{ fontSize: '0.85rem', color: '#777', marginBottom: '0.3rem' }}>
          {prod.category}
        </p>
        <h5 className="card-title" style={{ fontSize: '1rem' }}>
          <Link href={`/products/${prod.id}`} style={{ textDecoration: 'none', color: 'blue' }}>
            {prod.title}
          </Link>
        </h5>
        
      </div>
    </div>
  );
}
