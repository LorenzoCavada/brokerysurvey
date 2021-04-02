import React from "react"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 class="display-4">Question</h1>
        <p class="lead">
          Choose one
        </p>
      </div>

      <div class="card-deck mb-3 text-center">
        <div class="card mb-4 box-shadow">
          <div class="card-header">
            <h4 class="my-0 font-weight-normal">Bla bla</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">More bla bla</h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>list </li>
              <li>of</li>
              <li>more</li>
              <li>bla bla</li>
            </ul>
            <button type="button" class="btn btn-lg btn-block btn-outline-primary">I choose this</button>
          </div>
        </div>
        <div class="card mb-4 box-shadow">
          <div class="card-header">
            <h4 class="my-0 font-weight-normal">Bla bla</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">More bla bla</h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>list </li>
              <li>of</li>
              <li>more</li>
              <li>bla bla</li>
            </ul>
            <button type="button" class="btn btn-lg btn-block btn-outline-primary">I choose this</button>
          </div>
        </div>
        <div class="card mb-4 box-shadow">
          <div class="card-header">
            <h4 class="my-0 font-weight-normal">Bla bla</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">More bla bla</h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>list </li>
              <li>of</li>
              <li>more</li>
              <li>bla bla</li>
            </ul>
            <button type="button" class="btn btn-lg btn-block btn-outline-primary">I choose this</button>
          </div>
        </div>
      </div>
    </Layout>
  )
}
