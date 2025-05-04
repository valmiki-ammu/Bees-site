import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Font Awesome

const About = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="mb-4">
              <span
                className="badge bg-white text-dark shadow-sm"
                style={{
                  fontSize: "1.25rem", // increases text size
                  padding: "1rem 3rem", // vertical and horizontal padding
                }}
              >
                ABOUT US
              </span>
            </div>

            <h2 className="fw-bold">
              why our app <span className="text-primary">useful</span> to you?
            </h2>
            <p className="text-muted mb-5">
              Work on the go – BeeS mobile application lets you work from
              anywhere at any time. There is nothing that stops you from being
              productive with BeeS mobile app.
            </p>

            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="d-flex align-items-start">
                  <div className="bg-white rounded-circle p-3 me-3 shadow-sm">
                    <i className="fas fa-bullseye fa-2x text-primary"></i>
                  </div>
                  <div>
                    <h5 className="fw-bold">Our Mission</h5>
                    <p className="text-muted small mb-0">
                      Our mission is to offer the best automation solution for
                      business organizations. We help users use their data in a
                      more structured and organized manner.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mb-4">
                <div className="d-flex align-items-start">
                  <div className="bg-white rounded-circle p-3 me-3 shadow-sm">
                    <i className="fas fa-eye fa-2x text-primary"></i>
                  </div>
                  <div>
                    <h5 className="fw-bold">Our Vision</h5>
                    <p className="text-muted small mb-0">
                      To bring revolutionary change in organizations through
                      digitization with our automation products that are
                      cost-effective.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-6 text-center">
            <img
              src="./images/girlapp.png"
              alt="App Presentation"
              className="img-fluid"
              style={{ maxHeight: "500px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
