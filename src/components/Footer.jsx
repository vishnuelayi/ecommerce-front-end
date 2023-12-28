import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="Newsletter" />
                <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Recipient's email"
                  aria-label="Recipient's email"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Casual</Link>
                <Link className="text-white py-2 mb-1">Polo</Link>
                <Link className="text-white py-2 mb-1">Printed</Link>
                <Link className="text-white py-2 mb-1">Oversized</Link>
              </div>
              <div></div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Casual</Link>
                <Link className="text-white py-2 mb-1">Polo</Link>
                <Link className="text-white py-2 mb-1">Printed</Link>
                <Link className="text-white py-2 mb-1">Oversized</Link>
              </div>
              <div></div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Casual</Link>
                <Link className="text-white py-2 mb-1">Polo</Link>
                <Link className="text-white py-2 mb-1">Printed</Link>
                <Link className="text-white py-2 mb-1">Oversized</Link>
              </div>
              <div></div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Casual</Link>
                <Link className="text-white py-2 mb-1">Polo</Link>
                <Link className="text-white py-2 mb-1">Printed</Link>
                <Link className="text-white py-2 mb-1">Oversized</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center text-white mb-0">
                © {new Date().getFullYear()} Copyright: Creative Clothing.Inc
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
