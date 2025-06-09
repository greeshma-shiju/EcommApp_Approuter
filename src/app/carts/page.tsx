'use client';
import React from 'react';
import { useCart } from '@/app/context/CartContext';

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="container mt-5">
      <h3>Your Cart</h3>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <div className="row">
          {cart.map((item: any, index: number) => (
            <div key={index} className="col-12 mb-4">
              <div className="card">
                <div className="row g-0">
                  <div className="col-md-4 d-flex align-items-center">
                    <img
                      src={item.image}
                      className="img-fluid p-3"
                      alt={item.title}
                      style={{ maxHeight: '200px', objectFit: 'contain', margin: 'auto' }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.description}</p>
                      <h6 className="text-success">${item.price}</h6>
                      <small className="text-muted">Category: {item.category}</small>
                      <div className="mt-3">
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => removeFromCart(item.id)}
                        >
                          Remove from Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
