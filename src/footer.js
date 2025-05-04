import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-5 pb-4">
      <Container>
        <Row>
          {/* Logo & Socials */}
          <Col md={3} className="mb-4 text-center text-md-start">
           <center>
            <img
              src="./images/beeslogoo.jpeg"
              alt="Bees Logo"
              style={{
                width: "100px",
                marginBottom: "10px",
                borderRadius: "30%", // makes it a perfect circle
                border: "2px solid white", // optional: add border for a clean look
                textAlign: "center",
              }}
            />
            </center>

<div className="d-flex justify-content-center justify-content-md-start gap-3 mt-3">
  <a href="#" className="d-inline-flex align-items-center justify-content-center bg-white text-primary rounded-circle" style={{ width: '40px', height: '40px' }}>
    <FaFacebookF size={18} />
  </a>
  <a href="#" className="d-inline-flex align-items-center justify-content-center bg-white text-primary rounded-circle" style={{ width: '40px', height: '40px' }}>
    <FaTwitter size={18} />
  </a>
  <a href="#" className="d-inline-flex align-items-center justify-content-center bg-white text-primary rounded-circle" style={{ width: '40px', height: '40px' }}>
    <FaInstagram size={18} />
  </a>
  <a href="#" className="d-inline-flex align-items-center justify-content-center bg-white text-primary rounded-circle" style={{ width: '40px', height: '40px' }}>
    <FaYoutube size={18} />
  </a>
  <a href="#" className="d-inline-flex align-items-center justify-content-center bg-white text-primary rounded-circle" style={{ width: '40px', height: '40px' }}>
    <FaLinkedinIn size={18} />
  </a>
</div>

          </Col>

          {/* Products */}
          <Col md={3} className="mb-4">
            <h5>Products</h5>
            <ul className="list-unstyled">
              <li>Financial Cloud</li>
              <li>Student Cloud</li>
              <li>Institutions Cloud</li>
              <li>S C M Cloud</li>
              <li>H C M Cloud</li>
              <li>Self Services</li>
              <li>Mobile App</li>
            </ul>
          </Col>

          {/* Menu */}
          <Col md={3} className="mb-4">
            <h5>Menu</h5>
            <ul className="list-unstyled">
              <li>Home</li>
              <li>About Us</li>
              <li>Clients</li>
              <li>Careers</li>
              <li>News & Blogs</li>
              <li>Events</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col md={3}>
            <h5>Contact Us</h5>
            <p>
              <FaMapMarkerAlt className="me-2" />
              H.No:5–45/A/1, Gangasthan, (V)Dulapally, (M)Qutbullapur,
              <br />
              Hyderabad–500014, Telangana
            </p>
            <p>
              <FaPhoneAlt className="me-2" />
              +91–7093800994
            </p>
            <p>
              <FaEnvelope className="me-2" />
              admin@beessoftware.in
            </p>
          </Col>
        </Row>
        <hr className="border-light mt-4" />
        <p className="text-center mb-0">
          © {new Date().getFullYear()} BeeS Software. All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
