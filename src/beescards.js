import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const features = [
  {
    image: "./images/onecloud.jpeg", // Replace with actual image paths
    text: "ONE CLOUD APPLICATION FOR ALL YOUR BUSINESS NEEDS",
  },
  {
    image: "./images/technolohy.jpeg",
    text: "POWERED WITH LATEST TECHNOLOGIES",
  },
  {
    image: "./images/money.jpeg",
    text: "SAVES INVESTMENT ON SOFTWARE, IMPROVES PRODUCTIVITY",
  },
  {
    image: "./images/anlatics.jpeg",
    text: "ANALYTICS AND DASHBOARDS HELP IN BETTER DECISION MAKING",
  },
];

const Beescards = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        <div className="mb-5">
          <span
            className="badge bg-light text-dark border fw-semibold"
            style={{
              fontSize: "1.1rem", // larger text
              padding: "1rem 2.5rem", // more space inside the badge
              borderWidth: "2px", // slightly thicker border
              borderRadius: "1rem", // more rounded corners (optional)
            }}
          >
            OUR SIMPLE PROCESS
          </span>
        </div>

        <h2 className="fw-bold">
          <span className="text-primary">Future</span> ready applications
        </h2>

        <div className="row mt-4">
          {features.map((item, index) => (
            <div className="col-md-6 col-lg-3 mb-4" key={index}>
              <div className="card border-0 h-100 shadow-sm">
                <img
                  src={item.image}
                  alt="Feature"
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <p className="card-text fw-semibold text-muted small">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Beescards;
