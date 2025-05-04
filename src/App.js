import React from 'react';
import './App.css';
import Navbar from './navbar';
import Beessecond from './beessecond';
import Cloudilya from './cloudilya';
import Statsgrid from './statsgrid';
import Beescards from './beescards';
import About from './about';
import Beesimportant from './beesimporttant';
import ContactForm from './contactform';
import Cardstype from './cardstype';
import Footer from './footer';
import Cardslider from './cardslider';


function App() {
  return (
    <div>
      <Navbar />
      <Beessecond />
      <Cloudilya />
      <Statsgrid />
      <Beescards />
      <Cardslider/>
      <About />
      <Beesimportant />
      <ContactForm />
      <Cardstype />
      <Footer />  

    </div>
  );
}

export default App;
