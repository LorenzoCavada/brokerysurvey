import React from "react"
import { Link } from "gatsby"



export default function Navbar() {
  const handleClick = () => {
    console.log("gola")
    window.gtag('event', 'add_to_wishlist', {
      currency: 'USD',
      items: [{
        id: "P12345",
        name: "Android Warhol T-Shirt",
        brand: "Google",
        category: "Apparel/T-Shirts",
        coupon: "SUMMER_DISCOUNT",
        list_name: "Search Results",
        list_position: 1,
        price: 14.99,
        quantity: 2,
        variant: "Black"
      }],
      value: 29.98
    });
  }

  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <h5 className="my-0 mr-md-auto font-weight-normal "><Link to="/" className="p-2 text-dark">HaiR</Link></h5>
      <nav className="my-2 my-md-0 mr-md-3">
        <Link className="p-2 text-dark" to="/aboutus">About Us</Link>
      </nav>
      <Link className="btn btn-outline-primary" onClick={handleClick} to="#">Contact Us</Link>
    </div>
  )
}