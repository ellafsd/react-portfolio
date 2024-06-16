import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Resume() {
  const frontEnd = ["React", "HTML", "CSS", "Bootstrap", "Handlebars"];
  const backEnd = ["Node.js", "Express.js", "JavaScript", "PostgreSQL", "MongoDB"];
  const otherTools = ["GitHub", "Jest", "Insomnia", "Postman"];

  const handleDownload = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = '/Resume.txt';
    link.download = 'Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast.success("The Resume.txt file has been downloaded!", {
      position: "top-center", // Center the toast
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      transition: Slide,
      style: {
        textAlign: 'center',
        margin: 'auto',
        left: 0,
        right: 0,
      },
    });
  };

  return (
    <Container
    id="resume" 
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
      <Typography
        variant="h3"
        sx={{
          textAlign: 'center',
          marginBottom: '20px',
          color: 'primary.main',
          fontWeight: 'bold',
          fontSize: '2rem',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
        }}
      >
        Technical Skill Set
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
          <Typography
            variant="h5"
            sx={{
              marginBottom: '10px',
              fontWeight: 'bold',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
              color: 'primary.main',
              textDecoration: 'underline',
              fontSize: '1.5rem'
            }}
          >
            Front End
          </Typography>
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
          <Typography
            variant="h5"
            sx={{
              marginBottom: '10px',
              fontWeight: 'bold',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
              color: 'primary.main',
              textDecoration: 'underline',
              fontSize: '1.5rem'
            }}
          >
            Back End
          </Typography>
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
          <Typography
            variant="h5"
            sx={{
              marginBottom: '10px',
              fontWeight: 'bold',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
              color: 'primary.main',
              textDecoration: 'underline',
              fontSize: '1.5rem'
            }}
          >
            Other Tools
          </Typography>
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
        color="secondary"
        variant="contained"
        onClick={handleDownload}
        sx={{ marginTop: '10px' }}
      >
        Download My Resume
      </Button>
      <ToastContainer
        position="top-center" // Center the toast
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Slide}
        style={{ textAlign: 'center' }} // Center text inside the toast
      />
    </Container>
  );
}
