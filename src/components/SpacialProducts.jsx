import React from "react";
import { Link } from "react-router-dom";

function SpacialProducts() {
  return (
    <div className="col-6 mb-3">
      <div className="spacial-product-card">
        <div className="d-flex justify-content-between">
          <div>
            <img src="images/watch.jpg" alt="watch" className="img-fluid" />
          </div>
          <div className="spacial-product-content">
            <h5 className="brand">Rolex</h5>
            <h6 className="title">Down The Line Wolsberg Series</h6>
            <p className="price">
              <span className="red-p">₹999</span>&nbsp;<strike>₹2999</strike>
            </p>
            <div className="discount-till d-flex align-items-center gap-10">
              <p className="mb-0">
                <b>5</b> days
              </p>

              <div className="d-flex gap-10 align-items-center">
                <span className="badge rounded-circle p-3 bg-warning">1</span>:
                <span className="badge rounded-circle p-3 bg-warning">1</span>:
                <span className="badge rounded-circle p-3 bg-warning">1</span>
              </div>
            </div>
            <div className="prod-count">
              <p>Products: 5</p>
              <div className="progress mt-3">
                <div
                  className="progress-bar  bg-success"
                  role="progressbar"
                  style={{ width: "25%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <Link className="button my-4">Add to Cart</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpacialProducts;
