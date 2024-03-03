import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../features/products/productsSlice";
import { IoIosLogOut } from "react-icons/io";
import { FaShippingFast } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
// import cart from '../images/cart.svg'
// import user from '../images/user2.svg'
const Header = () => {
  const dispatch = useDispatch();

  const getUserFromLocalStorage = JSON.parse(localStorage.getItem("user"));

  const [subTotal, setSubTotal] = useState(null);

  useEffect(() => {
    dispatch(getCart());
  }, []);

  const handleLogout = () => {
    localStorage.clear()
    window.location.reload()
  }

  const cartProducts = useSelector((state) => state.products.cartProducts);

  //for showing total cart amount at the cart icon in the top
  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < cartProducts?.length; index++) {
      sum = sum + cartProducts[index]?.price * cartProducts[index]?.quantity;
      setSubTotal(sum);
    }
  }, [cartProducts]);

  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shipping Over Ksh 10,000 & Free Returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline:{" "}
                <a className="text-white" href="tel:+254 726606039">
                  +254 726606039
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
                <Link className="text-white">Digitic.</Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Product Here..."
                  aria-label="Search Product Here..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link
                    to="/compare-product"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src="images/compare.svg" alt="compare" />
                    <p className="mb-0">
                      Compare <br /> Products{" "}
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/wishlist"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src="images/wishlist.svg" alt="wishlist" />
                    <p className="mb-0">
                      Favourite <br /> Wishlist{" "}
                    </p>
                  </Link>
                </div>
                <div>
                  {getUserFromLocalStorage === null ? (
                    <div>
                      {" "}
                      <Link
                        to={"/login"}
                        className="d-flex align-items-center gap-10  text-white"
                      >
                        <img src="images/user2.svg" alt="User" />

                        <p className="mb-0">
                          Login <br /> My Account{" "}
                        </p>
                      </Link>{" "}
                    </div>
                  ) : (
                    <div>
                      <button
                        className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center mb-0"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img src="images/user2.svg" alt="User" />
                        <span className=" d-inline-block">
                          Hello
                          <br />
                          {getUserFromLocalStorage?.firstname}
                        </span>
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <Link className="dropdown-item fs-6" to="">
                            <CgProfile /> Profile
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item fs-6" to="/myorders">
                            <FaShippingFast /> Orders
                          </Link>
                        </li>
                        <div onClick={handleLogout}>
                        <li>
                          <Link className="dropdown-item fs-6" to="">
                            <IoIosLogOut /> Logout
                          </Link>
                        </li>
                        </div>
                        
                      </ul>
                    </div>
                  )}
                </div>
                <div>
                  <Link
                    to="/cart"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src="images/cart.svg" alt="cart" />
                    <div className="d-flex flex-column">
                      <span className="badge bg-white text-dark">
                        {cartProducts?.length ? cartProducts?.length : 0}
                      </span>
                      <p className="mb-0">₹{subTotal ? subTotal : 0}</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src="images/menu.svg" alt="" />
                      <span className=" me-5 d-inline-block">
                        Shop categories
                      </span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/product">Our Store</NavLink>
                    <NavLink to="/blogs">Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
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
