import React from "react"
import Layout from "../components/layout"



export default function Home() {
  return (
    <Layout>
      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 className="display-4">Question</h1>
        <p className="lead">
          Choose one
        </p>
      </div>

      <div className="card-deck mb-3 text-center">
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Bla bla</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">More bla bla</h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>list </li>
              <li>of</li>
              <li>more</li>
              <li>bla bla</li>
            </ul>
            <button type="button" className="btn btn-lg btn-block btn-outline-primary">I choose this</button>
          </div>
        </div>
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Bla bla</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">More bla bla</h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>list </li>
              <li>of</li>
              <li>more</li>
              <li>bla bla</li>
            </ul>
            <button type="button" className="btn btn-lg btn-block btn-outline-primary">I choose this</button>
          </div>
        </div>
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Bla bla</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">More bla bla</h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>list </li>
              <li>of</li>
              <li>more</li>
              <li>bla bla</li>
            </ul>
            <button type="button" className="btn btn-lg btn-block btn-outline-primary">I choose this</button>
          </div>
        </div>
      </div>
    </Layout>
  )
}
