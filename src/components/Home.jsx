import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "./BlogCard";
import ProductCard from "./ProductCard";

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative p-3">
                <img
                  src="images/main-banner.jpeg"
                  alt="main-banner"
                  className="img-fluid rounded-3"
                />
                <div className="main-banner-content position-absolute">
                  <h3>Classic Summer</h3>
                  <p>₹350 Onwards*</p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap justify-content-between align-items-center">
                <div className="small-banner position-relative p-3">
                  <img
                    src="images/plain.jpeg"
                    alt="main-banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h3>Plain</h3>
                  </div>
                </div>

                <div className="small-banner position-relative p-3">
                  <img
                    src="images/printed.jpeg"
                    alt="main-banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h3>Printed</h3>
                  </div>
                </div>

                <div className="small-banner position-relative p-3">
                  <img
                    src="images/pattern.jpeg"
                    alt="main-banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h3>Pattern</h3>
                  </div>
                </div>

                <div className="small-banner position-relative p-3">
                  <img
                    src="images/oversized.jpeg"
                    alt="main-banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h3>Oversized</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between flex-wrap justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service.png" alt="service" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-0">From all orders above ₹1000</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-02.png" alt="service" />
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p className="mb-0">Save upto 25%</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-03.png" alt="service" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Shop with an expert</p>
                  </div>
                </div>

                <div className=" d-flex align-items-center gap-15">
                  <img src="images/service-04.png" alt="service" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className="mb-0">Get Factory Default Price</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-05.png" alt="service" />
                  <div>
                    <h6>Secure Payment</h6>
                    <p className="mb-0">100% Protected Payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex align-items-center flex-wrap justify-content-between">
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p className="mb-0">10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="categories" />
                </div>

                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p className="mb-0">10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="categories" />
                </div>

                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Home Appliences</h6>
                    <p className="mb-0">10 Items</p>
                  </div>
                  <img src="images/homeapp.jpg" alt="categories" />
                </div>

                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Headphone</h6>
                    <p className="mb-0">10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="categories" />
                </div>

                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p className="mb-0">10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="categories" />
                </div>

                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p className="mb-0">10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="categories" />
                </div>

                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Home Appliences</h6>
                    <p className="mb-0">10 Items</p>
                  </div>
                  <img src="images/homeapp.jpg" alt="categories" />
                </div>

                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Headphone</h6>
                    <p className="mb-0">10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="categories" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="marquee-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="images/brand-01.png" alt="marquee" />
                </div>

                <div className="mx-4 w-25">
                  <img src="images/brand-02.png" alt="marquee" />
                </div>

                <div className="mx-4 w-25">
                  <img src="images/brand-03.png" alt="marquee" />
                </div>

                <div className="mx-4 w-25">
                  <img src="images/brand-04.png" alt="marquee" />
                </div>

                <div className="mx-4 w-25">
                  <img src="images/brand-05.png" alt="marquee" />
                </div>

                <div className="mx-4 w-25">
                  <img src="images/brand-06.png" alt="marquee" />
                </div>

                <div className="mx-4 w-25">
                  <img src="images/brand-07.png" alt="marquee" />
                </div>

                <div className="mx-4 w-25">
                  <img src="images/brand-08.png" alt="marquee" />
                </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
      <div className="row">
      <div className="col-12">
      <h3 className="section-title">Featured Collection</h3>
      </div>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      
      </div>
      </div>

      </section>

      <section className="blog-wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
      <div className="row">
      <div className="col-12">
      <h3 className="section-title">Our Letest Blogs</h3>
      </div>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      </div>
      </div>

      </section>


    </>
  );
};

export default Home;
