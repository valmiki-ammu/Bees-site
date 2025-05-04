import React from "react";
import "./cloudilya.css";

const Cloudilya = () => {
  return (
    <section className="erp-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Image: 5 columns on the left */}
          <div className="col-lg-5 text-center mb-4 mb-lg-0">
            <img
              src="./images/beesbanner.png"
              alt="Cloudilya ERP"
              className="img-fluid"
              style={{ maxHeight: "400px", objectFit: "contain" }}
            />
          </div>

          {/* Content: 7 columns on the right */}
          <div className="col-lg-7">
            <h1 className="erp-title">Futuristic Cloud ERP - Cloudilya</h1>
            <p className="erp-content">
              Cloudilya-The ERP Sutra aim to transform traditional business operations and optimize performance by providing a holistic view of the organization's resources, including Institutions, Students, finance, HCM, SCM, production, and customer relationship management. By integrating data from various sources and automating routine tasks, it is enable businesses to make more informed decisions, streamline processes, and reduce costs.
            </p>
            <button className="btn discover-btn btn-primary">
              Discover More +
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cloudilya;
