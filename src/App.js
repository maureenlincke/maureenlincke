import React from 'react';
import { VStack } from '@chakra-ui/react';
import About from './components/About'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <VStack w={'100%'}>
        <About />
      </VStack>
    </BrowserRouter>
  );
}

export default App;
