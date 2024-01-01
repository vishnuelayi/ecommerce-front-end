import React from "react";
import { Link } from "react-router-dom";

function ProductCard() {
  return (
    <div className="col-3">
      <div className="product-card position-relative">
      <div className="wishlist-icon position-absolute">
      <img src="images/wish.svg" alt="wishlist-icon" />

      </div>
        <div className="product-image">
          <img src="images/watch.jpg" className="img-fluid" alt="product-img" />
        </div>
        <div className="product-card-details">
          <h6 className="brand">Rolex</h6>
          <h5 className="product-title">Carribien Wonder</h5>

          <p className="price">₹1,39990</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <Link>
              <img src="images/view.svg" alt="cart-icon" />
            </Link>
            <Link>
              <img src="images/prodcompare.svg" alt="heart-icon" />
            </Link>
            <Link>
              <img src="images/add-cart.svg" alt="cart-icon" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
