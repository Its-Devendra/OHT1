import React from 'react';
import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <Typography variant="h2" gutterBottom>About Us</Typography>
      <Typography variant="body1" paragraph>
        Our mission is to create a centralized platform for culinary enthusiasts to discover, book, and
        participate in virtual cooking classes and cultural experiences.
      </Typography>
      <Typography variant="body1" paragraph>
        Join us on this culinary adventure and explore the rich world of food and culture from the comfort
        of your home.
      </Typography>
      <Button variant="outlined" color="primary" component={Link} to="/culinary-experiences">
        Get Started
      </Button>
    </div>
  );
};

export default About;
