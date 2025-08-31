import React from "react";

export default function About() {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            {/* Left Image */}
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ minHeight: "400px" }}
            >
              <div className="position-relative h-100">
                <img
                  className="img-fluid position-absolute w-100 h-100"
                  src="/img/guru.png"
                  alt="about $COURSE"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <h6 className="section-title bg-white text-start text-primary pe-3">
                About $COURSE
              </h6>
              <h1 className="mb-4">Welcome to the School of Scams</h1>
              <p className="mb-4">
                Forget boring jobs and fake promises. $COURSE is the ultimate
                meme coin academy teaching the real-world skills that make
                normies cry and degens laugh all the way to the bank. 
              </p>
              <p className="mb-4">
                We don’t do “utility” or “roadmaps”. We do pure chaos,
                internet hustle, and unapologetic clown energy. If you’ve ever
                dreamed of escaping wage-slavery, this is your class.
              </p>

              <div className="row gy-2 gx-4 mb-4">
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2" />
                    High-Ticket Gaslighting
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2" />
                    Online Scamming 101
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2" />
                    Credit Card Fraud Basics
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2" />
                    Closing for Pyramid Schemes
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2" />
                    NPC Monetization
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2" />
                    Dating Coaches for Incels
                  </p>
                </div>
              </div>

              {/* <a className="btn btn-primary py-3 px-5 mt-2" href>Read More</a> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
