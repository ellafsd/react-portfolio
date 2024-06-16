import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success(`Thank you ${name}, your message has been sent!`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: {
        background: "#333",
        color: "#fff",
        borderRadius: "8px",
        textAlign: "center",
      },
    });

    // Reset the form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <Container
      id="contact" 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '80vh',
        backgroundColor: '#121212',
        paddingTop: '30px',
        paddingBottom: '30px',
      }}
    >
      <Typography variant="h4" sx={{ color: '#00FFFF', marginBottom: '20px' }}>Contact Us</Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          width: '100%',
          maxWidth: '400px',
        }}
      >
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          sx={{ input: { color: '#fff' }, label: { color: '#00FFFF' } }}
        />
        <TextField
          label="Email Address"
          variant="outlined"
          type="email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          sx={{ input: { color: '#fff' }, label: { color: '#00FFFF' } }}
        />
        <TextField
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          sx={{ input: { color: '#fff' }, label: { color: '#00FFFF' } }}
        />
        <Button type="submit" variant="contained" color="secondary" sx={{ alignSelf: 'center' }}>
          Submit
        </Button>
      </Box>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ textAlign: 'center' }}
      />
    </Container>
  );
}
