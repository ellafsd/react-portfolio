import { Container, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function About() {
  const frontEnd = ["HTML", "CSS", "Bootstrap", "Handlebars", "React"];
  const backEnd = ["Node.js", "Express.js", "JavaScript", "PostgreSQL", "MongoDB"];
  const otherTools = ["GitHub", "Jest", "Insomnia", "Postman"];

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '80vh',
        backgroundColor: 'background.default',
        paddingTop: '30px',
        paddingBottom: '30px'
      }}
    >
      <Typography variant="h3" sx={{ textAlign: 'center', marginBottom: '20px', color: 'primary.main' }}>
        My Development Proficiencies
      </Typography>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          width: '100%',
          maxWidth: '800px',
          marginBottom: '20px'
        }}
      >
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Typography variant="h5" sx={{ marginBottom: '10px' }}>Front End</Typography>
          <List>
            {frontEnd.map((prof) => (
              <ListItem key={prof} sx={{ padding: 0 }}>
                <ListItemText primary={prof} sx={{ textAlign: 'center' }} />
              </ListItem>
            ))}
          </List>
        </Container>
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Typography variant="h5" sx={{ marginBottom: '10px' }}>Back End</Typography>
          <List>
            {backEnd.map((prof) => (
              <ListItem key={prof} sx={{ padding: 0 }}>
                <ListItemText primary={prof} sx={{ textAlign: 'center' }} />
              </ListItem>
            ))}
          </List>
        </Container>
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Typography variant="h5" sx={{ marginBottom: '10px' }}>Other Tools</Typography>
          <List>
            {otherTools.map((tool) => (
              <ListItem key={tool} sx={{ padding: 0 }}>
                <ListItemText primary={tool} sx={{ textAlign: 'center' }} />
              </ListItem>
            ))}
          </List>
        </Container>
      </Container>
      <Button
        color="primary"
        variant="contained"
        component="a"
        href="https://www.linkedin.com/in/ella-girin"
        target="_blank"
        sx={{ marginTop: '20px' }}
      >
        View My LinkedIn
      </Button>
      <Button
        color="secondary"
        variant="contained"
        component={Link}
        to="/resume"
        sx={{ marginTop: '10px' }}
      >
        Download My Resume
      </Button>
    </Container>
  );
}
