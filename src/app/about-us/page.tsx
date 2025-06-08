import { Metadata } from "next";

 export const metadata: Metadata ={
  title:"About Us"
}
export default function AboutUs(){
 
    return(
        <div className="container my-5" style={{ paddingTop: '40px' }}>
      <h2 className="text-center mb-4">About Us</h2>

    
      <div className="mb-5">
        <h4>Who We Are</h4>
        <p>
          We are a customer-first eCommerce platform offering a wide range of
          high-quality products including electronics, fashion, home essentials, and
          more. Our goal is to make online shopping simple, safe, and accessible to
          everyone.
        </p>
      </div>

    
      <div className="row mb-5">
        <div className="col-md-6 mb-4 mb-md-0">
          <div className="p-4 border rounded bg-light shadow-sm h-100">
            <h5>Our Mission</h5>
            <p>
              To deliver the best online shopping experience with top-notch customer
              service, fast delivery, and quality products at competitive prices.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="p-4 border rounded bg-light shadow-sm h-100">
            <h5>Our Vision</h5>
            <p>
              To be the most trusted and innovative eCommerce brand in the region,
              continually expanding our offerings and delighting customers.
            </p>
          </div>
        </div>
      </div>

    
      <div className="mb-5">
        <div className="p-4 border rounded bg-white shadow-sm">
          <h5>Why Choose Us</h5>
          <ul>
            <li> Wide selection of top-quality products</li>
            <li> Secure and easy payment options</li>
            <li> Fast and reliable shipping</li>
            <li> 24/7 customer support</li>
            <li> Hassle-free returns and refunds</li>
          </ul>
        </div>
      </div>
    </div>
    );
}