import React from "react"
import { Link } from "gatsby"

export default function Navbar() {
  return (
    <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <h5 class="my-0 mr-md-auto font-weight-normal">HaiR</h5>
      <nav class="my-2 my-md-0 mr-md-3">
        <Link class="p-2 text-dark" to="/aboutus">About Us</Link>
      </nav>
      <a class="btn btn-outline-primary" href="#">Contact Us</a>
    </div>
  )
}