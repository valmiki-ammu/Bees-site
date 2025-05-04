import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome

const featuresLeft = [
  {
    title: "Comprehensive",
    icon: "fa-key",
    content:
      "Able to manage and automate all the key business processes of an organization, including administration, accounting, HR, supply chain, CRM, and more.",
  },
  {
    title: "Flexibility",
    icon: "fa-arrows-alt",
    content: "Adaptable to various industries and business needs.",
  },
  {
    title: "Comprehensive",
    icon: "fa-arrows-alt",
    content: "Able to manage and automate all the key business processes of an organization, including administration, accounting, human resources, supply chain management, customer relationship management, and more.",
  },
  {
    title: "Customizability",
    icon: "fa-sliders-h",
    content: "Highly customizable to fit unique business workflows.",
  },
  {
    title: "Scalability",
    icon: "fa-chart-line",
    content: "Scales as your business grows, without compromising performance.",
  },
];

const featuresRight = [
  {
    title: "Integration",
    icon: "fa-plug",
    content:
      "Able to integrate with other software applications and systems used by the organization.",
  },
  {
    title: "User-friendly",
    icon: "fa-user-check",
    content: "Intuitive design ensures easy onboarding for all users.",
  },
  {
    title: "Security",
    icon: "fa-shield-alt",
    content: "Built-in features to ensure data security and compliance.",
  },
  {
    title: "Analytics and Reporting",
    icon: "fa-chart-pie",
    content: "Real-time insights and customizable reports.",
  },
  {
    title: "Mobile Access",
    icon: "fa-mobile-alt",
    content: "Accessible on-the-go through mobile devices.",
  },
];

const FeatureAccordion = ({ features, group }) => (
  <div className="accordion" id={`accordion-${group}`}>
    {features.map((item, idx) => (
      <div className="accordion-item" key={idx}>
        <h2 className="accordion-header" id={`heading-${group}-${idx}`}>
          <button
            className={`accordion-button ${idx !== 0 ? "collapsed" : ""}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapse-${group}-${idx}`}
            aria-expanded={idx === 0}
            aria-controls={`collapse-${group}-${idx}`}
          >
            <i className={`me-2 fas ${item.icon}`}></i> {item.title}
          </button>
        </h2>
        <div
          id={`collapse-${group}-${idx}`}
          className={`accordion-collapse collapse ${idx === 0 ? "show" : ""}`}
          aria-labelledby={`heading-${group}-${idx}`}
          data-bs-parent={`#accordion-${group}`}
        >
          <div className="accordion-body text-muted">{item.content}</div>
        </div>
      </div>
    ))}
  </div>
);

const Beesimporttant = () => {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="fw-bold text-center mb-3">
          Why Cloudilya is Important to your{" "}
          <span className="text-primary">organization</span>?
        </h2>
        <p className="text-center text-muted mb-5">
          Cloudilya–The ERP Sutra is designed to integrate all of the critical business processes
          of an organization into a single system. How useful to your business:
        </p>
        <div className="row">
          <div className="col-md-6 mb-4">
            <FeatureAccordion features={featuresLeft} group="left" />
          </div>
          <div className="col-md-6 mb-4">
            <FeatureAccordion features={featuresRight} group="right" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beesimporttant;
