import React from "react";
import { Link } from "react-router-dom";

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
                <div className="small-banner position-relative p-0">
                  <img
                    src="images/plain.jpeg"
                    alt="main-banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h3>Plain</h3>
                  
                  </div>
                </div>

                <div className="small-banner position-relative p-0">
                  <img
                    src="images/printed.jpeg"
                    alt="main-banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h3>Printed</h3>
                    
                  </div>
                </div>

                <div className="small-banner position-relative p-0">
                  <img
                    src="images/pattern.jpeg"
                    alt="main-banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h3>Pattern</h3>
                    
                  </div>
                </div>

                <div className="small-banner position-relative p-0">
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
    </>
  );
};

export default Home;
