import { Container, Typography } from '@mui/material';
import Project from '../components/Project';

export default function Portfolio() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        minHeight: '80vh',
        padding: '20px',
        backgroundColor: 'background.paper'
      }}
    >
      <Typography
        variant="h2"
        sx={{
          marginBottom: '20px',
          color: 'primary.main',
          textAlign: 'center'
        }}
      >
        Portfolio
      </Typography>
      <Project />
    </Container>
  );
}
