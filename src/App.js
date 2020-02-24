import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Contact } from './components/pages/Contact'
import { About } from './components/pages/About'
import { Portfolio } from './components/pages/Portfolio'
import { Card } from './components/subcomponents/Card'
import { Footer } from './components/Footer'

function App() {
  return (
  <Router>
   <Navbar />
   <Route exact path="/" component={About} />
   <Route exact path="/about" component={About} />
   <Route exact path="/portfolio" component={Portfolio} />
   <Route exact path="/contact" component={Contact} />
   <Footer />
  </Router>
  );
}

export default App;
