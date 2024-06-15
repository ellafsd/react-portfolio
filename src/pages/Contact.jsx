import { Container, TextField, Button, FormControl, FormLabel, Grid, Typography, Paper } from '@mui/material';
import { useState } from 'react';
import { validateEmail } from '../utils/helper';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState(false); 
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        setNameError(false);
        break;
      case 'email':
        setEmail(value);
        setEmailError(!validateEmail(value));
        break;
      case 'message':
        setMessage(value);
        setMessageError(false);
        break;
      default:
        break;
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setNameError(false);
    setEmailError(false);

    if (!name) {
      setNameError(true);
      return; 
    }
    if (!validateEmail(email)) {
      setEmailError(true);
      return; 
    }
    if (!message) {
      setMessageError(true);
      return;
    }

    setName('');
    setMessage('');
    setEmail('');
    alert(`Thank you ${name}, your message has been sent`);
  };

  return (
    <Container sx={{ display: 'flex', flexGrow: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column', padding: '20px', backgroundColor: 'background.default' }}>
      <Typography variant="h2" component="h1" sx={{ marginBottom: '20px', color: 'primary.main', textAlign: 'center' }}>
        Get in Touch
      </Typography>
      <Paper elevation={3} sx={{ padding: '20px', maxWidth: '600px', width: '100%' }}>
        <form onSubmit={handleFormSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl fullWidth margin="normal" error={nameError}>
                <FormLabel htmlFor="name" sx={{ color: 'text.primary' }}>Name</FormLabel>
                <TextField
                  id="name"
                  label="Your Name"
                  variant="outlined"
                  value={name}
                  name="name"
                  onChange={handleInputChange}
                  helperText={nameError ? 'Please enter your name' : ''} 
                  sx={{ marginBottom: '10px' }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth margin="normal" error={emailError}>
                <FormLabel htmlFor="email" sx={{ color: 'text.primary' }}>Email Address</FormLabel>
                <TextField
                  id="email"
                  label="Your Email"
                  variant="outlined"
                  type="email"
                  value={email}
                  name="email"
                  onChange={handleInputChange}
                  helperText={emailError ? 'Please enter a valid email address' : ''} 
                  sx={{ marginBottom: '10px' }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth margin="normal" error={messageError}>
                <FormLabel htmlFor="message" sx={{ color: 'text.primary' }}>Message</FormLabel>
                <TextField
                  id="message"
                  label="Your Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  value={message}
                  name="message"
                  onChange={handleInputChange}
                  helperText={messageError ? 'Please enter a brief message' : ''}
                  sx={{ marginBottom: '10px' }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              <Button type="submit" variant="contained" sx={{ marginTop: '10px' }}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
        {nameError || emailError || messageError ? (
          <Typography variant="body2" color="error" sx={{ marginTop: '10px', textAlign: 'center' }}>
            Please fill out all fields correctly.
          </Typography>
        ) : null}
      </Paper>
    </Container>
  ); 
}
