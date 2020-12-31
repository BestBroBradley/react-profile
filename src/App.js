import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { languageContext } from './languageContext'
import "./styles/fonts.css"
import { Contact } from './components/pages/Contact'
import { About } from './components/pages/About'
import { Portfolio } from './components/pages/Portfolio'
import { Footer } from './components/Footer'

function App() {

  const [state, setState] = useState({
    language: ""
  })

  useEffect(() => {
    setState({...state, language: "English"})
    console.log("State changed")
  }, [])

  return (
  <Router>
   <Route exact path="/" component={About} />
   <Route exact path="/about" component={About} />
   <Route exact path="/portfolio" component={Portfolio} />
   <Route exact path="/contact" component={Contact} />
   <Footer />
  </Router>
  );
}

export default App;
