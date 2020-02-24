import React from 'react';
import { Navbar } from './components/Navbar'
import { Contact } from './components/Contact'
import { About } from './components/About'
import { Portfolio } from './components/Portfolio'
import { Card } from './components/Card'
import { Footer } from './components/Footer'

function App() {
  return (
  <>
   <Navbar />
   <Contact />
   <About />
   <Portfolio />
   <Card />
   <Footer />
  </>
  );
}

export default App;
