import { useRouteError } from 'react-router-dom';
import { Container, Typography } from '@mui/material';

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        padding: '20px'
      }}
    >
      <Typography variant="h4" component="h1" color="error.main" gutterBottom>
        Something went wrong.
      </Typography>
      <Typography variant="body1" color="text.primary">
        Sorry, an unexpected error has occurred.
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ marginTop: '10px' }}>
        <i>{error.statusText || error.message}</i>
      </Typography>
    </Container>
  );
}
