import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./contactform.css"; 

const ContactForm = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center shadow rounded overflow-hidden">
          
          <div className="col-lg-6 p-0">
            <img
              src="./images/hhhhhh.webp" 
              alt="Bee Bot"
              className="img-fluid w-60 h-60 imgkit"
              style={{ maxHeight: "500px", objectFit: "cover" }}
            />
          </div>

          
          <div className="col-lg-6 p-5 bg-white">
            <span className="badge rounded-pill bg-light text-dark px-3 py-2 mb-3">
              GET IN TOUCH
            </span>
            <h2 className="fw-bold mb-4">
              Bringing Your <span className="text-primary">Vision</span>
            </h2>

            <form>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Your Phone"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Subject"
                  />
                </div>
              </div>

              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-dark w-100">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
