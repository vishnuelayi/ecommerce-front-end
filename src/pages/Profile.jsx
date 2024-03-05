import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Profile() {
  useEffect(() => {}, []);

  const getUserFromLocalStorage = JSON.parse(localStorage.getItem("user"));

  return (
    <section style={{ backgroundColor: "#eee" }} className="d-flex">
      <div className="container py-5">
        <div className="row">
          <div className="col">
            <nav
              aria-label="breadcrumb"
              className="bg-light rounded-3 p-3 mb-4"
            >
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">User</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  User Profile
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle img-fluid"
                  style={{ width: "150px" }}
                />
                <h5 className="mt-3">
                  {getUserFromLocalStorage &&
                    `${getUserFromLocalStorage?.firstname} ${getUserFromLocalStorage?.lastname}`}
                </h5>
                <p className="text-muted mb-3">{getUserFromLocalStorage && getUserFromLocalStorage?.email}</p>
                
                <div className="d-flex justify-content-center mb-2">
                <Link to="/cart">
                  <button type="button" className="btn btn-secondary">
                    Cart
                  </button>
                  </Link>
                  <Link to="/wishlist">
                  <button
                    type="button"
                    className="btn btn-outline-secondary ms-1"
                  >
                    Wishlist
                  </button>
                  </Link>   
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
