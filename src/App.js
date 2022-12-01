import { useState } from 'react';
import { Box } from '@chakra-ui/react';
import HeroSection from './components/LandingPage/HeroSection';
import Layout from './components/LandingPage/Layout';
import Features from './components/LandingPage/Features';
import SplitWithImage from './components/LandingPage/Features2';
import Footer from './components/LandingPage/Footer';
import CTA from './components/LandingPage/CTA';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <Box bg='gray.50' w='full'>
        <HeroSection />
        {/* <Features /> */}
        <SplitWithImage />
        <CTA />
        <Footer />
      </Box>
    </Layout>
  );
}

export default App;
