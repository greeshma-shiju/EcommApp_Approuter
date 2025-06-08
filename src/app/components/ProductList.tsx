import React from 'react'
import { ProductsService } from '../services/product-services';
import ProductCard from './product-card/ProductCard';

export default async function ProductList() {
    var products = await ProductsService.getProducts();
  return (
    
    <div className="container mt-4" >
      <div className="row">
        {products.map((product: any) => (
          <div key={product.id} className="col-md-4 mb-4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  )
}
