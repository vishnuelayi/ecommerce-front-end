import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaYoutube, FaPinterest } from "react-icons/fa";

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

              <div>
                <address className="text-white fs-6">
                  244 Independent Nagar, <br />
                  Kalamassery, Kochi 682022
                </address>
                <a
                  className="text-white mt-3 d-block mb-3 fs-6"
                  href="tel:+9856742566"
                >
                  +91 0458548745
                </a>
                <a className="text-white mt-3 d-block mb-3 fs-6" href="mailto:">
                  creativeclothing@gmail.com
                </a>
                <div className="social-icons d-flex align-items-center gap-30">
                  <a href="#">
                    <FaInstagram className="text-white fs-4" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-white fs-4" />
                  </a>
                  <a href="#">
                    <FaYoutube className="text-white fs-4" />
                  </a>
                  <a href="#">
                    <FaPinterest className="text-white fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Terms & Conditions</Link>
                <Link className="text-white py-2 mb-1">Privacy Policy</Link>
                <Link className="text-white py-2 mb-1">Sitemap</Link>
                <Link className="text-white py-2 mb-1">Blog</Link>
              </div>
              <div></div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Need Help</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">My Account</Link>
                <Link className="text-white py-2 mb-1">FAQs </Link>
                <Link className="text-white py-2 mb-1">Track Order</Link>
                <Link className="text-white py-2 mb-1">Returns & Refunds</Link>
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
