import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    icon: "🧠",
    value: 25,
    suffix: "+",
    label: "Years of experience",
  },
  {
    icon: "🛡️",
    value: 280,
    suffix: "+",
    label: "Success Stories",
  },
  {
    icon: "👍",
    value: 56000,
    suffix: "K+",
    label: "Companies Trust Us",
  },
  {
    icon: "🎯",
    value: 100,
    suffix: "%",
    label: "Results Guaranteed",
  },
];

const StatsGrid = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="container py-5" ref={ref}>
      <div className="row g-4 align-items-center">
        <div className="col-lg-7">
          <div className="row g-4">
            {stats.map((item, idx) => (
              <div className="col-md-6" key={idx}>
                <div className="bg-white rounded-4 shadow-sm p-4 text-center h-100">
                  <div style={{ fontSize: "2rem" }}>{item.icon}</div>
                  <h3 className="fw-bold mt-3">
                    {inView ? (
                      <CountUp
                        end={item.value}
                        duration={2}
                        separator=","
                        suffix={item.suffix}
                      />
                    ) : (
                      `0${item.suffix}`
                    )}
                  </h3>
                  <p className="text-muted">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-lg-5">
          <div className="position-relative rounded-4 overflow-hidden shadow-lg">
            <img
              src="./images/beesgirl.png"
              alt="Employees"
              className="img-fluid"
              style={{ objectFit: "cover", width: "150%", height: "150%" }}
            />
            <div className="position-absolute bottom-0 start-0 end-0 bg-primary bg-opacity-75 text-white text-center py-4">
              <h4 className="mb-0 fw-bold">
                12000+ employees in 30 countries in Europe
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsGrid;
