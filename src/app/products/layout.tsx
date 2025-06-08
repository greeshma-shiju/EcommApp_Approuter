 import React from 'react'

export default function ProductsLayout({children}: {
    children: React.ReactNode;
 }){
   return (
     <div>
         <h3>This is products related pages</h3>
    {children}
     </div>
  )
}