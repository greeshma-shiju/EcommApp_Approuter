'use client';

import React from 'react';
import { useCart } from '@/app/context/CartContext';
import { useRouter } from 'next/navigation';

export default function ProductDetail({ product }: { product: any }) {
  const { addToCart } = useCart();
  const router = useRouter();

  const handleAddToCart = () => {
    addToCart(product);
    router.push('/carts');
  };

  return (
    <div className="container mt-5" style={{ paddingTop: '50px'}}>
      <div className="card mb-5">
        <div className="row g-0">
          <div className="col-md-5">
            <img
              src={product.image}
              className="img-fluid p-4"
              alt={product.title}
              style={{ maxHeight: '250px', objectFit: 'contain' }}
            />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <h4 className="text-success">${product.price}</h4>
              <button className="btn btn-primary mt-3" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
