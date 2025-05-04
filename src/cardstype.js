import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Cardstype = () => {
  const cards = [
    {
      img: "./images/cards.jpg",
      title: "Bees Software Solutions Partners with Presidency University to Digitize Examination Process and Enhance Academic Efficiency",
      
    },
    {
      img: "./images/cards2.jpeg",
      title: "BeeS Software Solutions Private Limited and Institute of Actuaries of India(IAI) Join Forces to Digitize Examination Process for Enhanced Efficiency and Accuracy",
      
    },
    {
      img: "./images/cards3.png",
      title: "Revolutionizing Engineering Education: BeeS Software Company’s Impact at the Sixth International Conference on ICTIEE 2019",
      
    },
    {
      img: "./images/cards4.png",
      title: "Cutting-Edge Cloud-Enabled Software Product Unveiled by BeeS Software Solutions Private Limited, Revolutionizing Work Processes",
      
    }
  ];

  return (
    <div className="container mt-4">
      <div className="row">
        {cards.map((card, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-3 mb-4">
            <div className="card h-100">
              <img
                src={card.img}
                className="card-img-top"
                alt={`Card ${index + 1}`}
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cardstype;
