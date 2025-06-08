


'use client'; 

import Link from "next/link";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "@/app/context/CartContext";

export default function Nav() {
  const { cart } = useCart();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <Link className="navbar-brand" href="/">
          <Image src="/images/logo.jpg" alt="Logo" width={60} height={60} />
        </Link>

        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link active" href="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/products">Products</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/about-us">About Us</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/contact-us">Contact Us</Link></li>
          </ul>
        </div>

        

        <div className="d-flex position-relative">
          <Link href="/carts" className="nav-link text-white position-relative">
            <FaShoppingCart size={24} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cart.length}
            </span>
          </Link>
        </div>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
}
