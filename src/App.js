import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Nav from './components/Nav';

import Hero from './components/Hero';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About';

function App() {
  return (
    <Router>
      <ChakraProvider theme={theme}>
        <Nav />
        <Switch>
          <Route path="/" exact component={Hero} />
          <Route path="/about" component={About} />
          {/* <Route path="/project" component={About} /> */}
          {/* <Route path="/contact" component={Contact} /> */}
        </Switch>
      </ChakraProvider>
    </Router>
  );
}

export default App;
