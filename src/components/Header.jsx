import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free shipping on all orders above ₹1000
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Helpline:
                <a className="text-white" href="tel:+9856742566">
                  +9104587 548 778
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="text-white">Creative.</Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                //   style={{ marginLeft: "20px" }}
                  placeholder="Search Product Here..."
                  aria-label="Search Product Here..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link className="d-flex align-items-center text-white gap-10" to="#">
                    <img src="/images/compare.svg" alt="compare" />
                    <p className="mb-0">
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center text-white gap-10" to="#">
                    <img src="/images/wishlist.svg" alt="wishlist" />
                    <p className="mb-0">
                      Favourite <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center text-white gap-10" to="#">
                    <img src="/images/user.svg" alt="account" />
                    <p className="mb-0">
                      Login
                      <br />
                      My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center text-white gap-10" to="#">
                    <img src="/images/cart.svg" alt="cart" />
                    <div className="d-flex flex-column">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0">₹0.00</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-lower py-3">
     <div className="container-xxl">
     <div className="row">
        <div className="col-12">
            <div className="menu-bottom d-flex align-items-center">
            <div>

            </div>

            </div>
        </div>
     </div>
     </div>
      </header>
    </>
  );
};

export default Header;
