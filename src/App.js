import React from 'react';
import { Container, VStack } from '@chakra-ui/react';
import About from './components/About';
import Skills from './components/skills/Skills';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container>
        <VStack w={'100%'}>
          <About />
          <Skills />
        </VStack>
      </Container>
    </BrowserRouter>
  );
}

export default App;
