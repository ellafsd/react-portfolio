import { Outlet } from 'react-router-dom';
import { Container, Box } from '@mui/material';
import Navbar from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
      <Box sx={{ minHeight: '10vh' }}>
        <Navbar />
      </Box>
      <Container sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, paddingTop: '20px', paddingBottom: '20px' }}>
        <Outlet />
      </Container>
      <Box sx={{ minHeight: '10vh', flexShrink: 0 }}>
        <Footer />
      </Box>
    </Box>
  );
}

export default App;
