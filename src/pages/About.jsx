
import { Container, Typography, Box, Card, CardMedia, Fade } from '@mui/material';
import { useState} from 'react';
import image from "../assets/image.jpg"; 

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [isFirstRender, setIsFirstRender] = useState(true);


  return (
    <Container id="about" sx={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexDirection: 'column', flexGrow: 1, position: 'relative'
    }}>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.2)',
          zIndex: -1,
        }}
      />
      <Fade in={isFirstRender ? true : visible} timeout={1000}>
        <Card sx={{ marginTop: "20px" }}>
          <CardMedia
            component="img"
            image={image}
            sx={{ width: '150px', height: "150px" }}
          />
        </Card>
      </Fade>
      <Typography variant="h1" sx={{ zIndex: 1, margin: "20px" }}>About Me</Typography>
      <Typography variant="body1" sx={{ zIndex: 1, textAlign: 'center', margin: "20px" }}>
        Hello! I'm Ella Girin, a full stack developer with a flair for creativity and a passion for technology. With a solid foundation in JavaScript, React, and other modern web technologies, I enjoy crafting seamless and engaging user experiences.
      </Typography>
      <Typography variant="body1" sx={{ zIndex: 1, textAlign: 'center', margin: "20px" }}>
        My journey in web development started from a love for problem-solving and a curiosity about how things work. Over the years, I've honed my skills through various projects and collaborations, constantly striving to learn and grow.
      </Typography>
      <Typography variant="body1" sx={{ zIndex: 1, textAlign: 'center', margin: "20px" }}>
        Beyond coding, I have a keen interest in design, and I love blending aesthetics with functionality to create visually appealing web applications. When I'm not in front of the computer, I enjoy exploring new places, reading, and indulging in creative hobbies like painting and photography.
      </Typography>
    </Container>
  );
}
