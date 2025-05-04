import React from 'react';


 function Beessecond () {
  return (
    <div class="container py-5">
    <div class="row align-items-center">
      
      <div class="col-md-6">
        <h1 class="fw-bold display-5">BeeS <span class="highlight">Growth</span> Strategies</h1>
        <p class="lead mt-3">Navigating the Path to Success: Insightful Consulting for Thriving Businesses</p>
        <button class="btn btn-primary mt-4">Get Started Today</button>
  
        <div class="google-reviews mt-3 d-flex align-items-center">
          <img src="./images/goolepic.png" alt="Google" width="120" class="me-2"/>
          <span class="me-2">4.8 Google Reviews</span>
          <strong>(128 Reviews)</strong>
        </div>
      </div>
  
     
      <div class="col-md-6 position-relative mt-4 mt-md-0">
        <img src="./images/beespic.jpg" alt="Meeting" class="img-fluid rounded-4 shadow imgsize"/>
  
       
        <div className="stats-overlay strip" style={{ top: '10%', left: '5%' }}>
         <strong>22M+</strong>  Happy Customers
        </div>
        <div class="stats-overlay strip" style={{bottom: '30%', right: '5%'}}>
          Success Rate: <strong>98%</strong>
        </div>
        <div class="stats-overlay strip" style={{bottom: '10%', left: '10%',color:'red'}}>
          Company Value: <strong>$500000</strong>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default Beessecond;