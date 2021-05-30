import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Nav from './components/Nav';
import Hero from './components/Hero';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Nav />
      <Hero />
    </ChakraProvider>
  );
}

export default App;
