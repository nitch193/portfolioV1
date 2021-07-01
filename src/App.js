import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import Nav from './components/Nav';

import Hero from './components/Hero';
import { BrowserRouter as Router } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';

function App() {
  return (
    <Router>
      <ChakraProvider theme={theme}>
        <Nav />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </ChakraProvider>
    </Router>
  );
}

export default App;
