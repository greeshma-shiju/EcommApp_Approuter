import React, { Suspense } from 'react'
import ProductCard from '../components/product-card/ProductCard';
import { ProductsService } from '../services/product-services';
import GotoCartButton from '../components/GotoCartButton';
import Link from 'next/link';
import ProductList from '../components/ProductList';
import { Metadata } from 'next';
import { cookies } from 'next/headers'
import { headers } from 'next/headers'

export const metadata: Metadata ={
  title:"Productlist  Page"
}
export default async function Products(props:any) {
  
const headerList=headers();
const referer = headerList.get('referer');
console.log("referer:",referer);
console.log(headerList.get('User-Agent'));
console.log(headerList.get('Host'));

return (
    <div>
      {/* <GotoCartButton/> */}
      <div style={{ marginTop: '100px', textAlign: 'center' }}></div>
   <Suspense fallback={<span style={{color:'red'}}>Loading</span>}>
     <ProductList/>
  </Suspense>
    </div>
  )
}
