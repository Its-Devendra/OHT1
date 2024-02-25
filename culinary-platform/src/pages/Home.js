import React from 'react';
import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Typography variant="h2" gutterBottom>Welcome to the Culinary Platform!</Typography>
      <Typography variant="body1" paragraph>
        Discover and engage in virtual cooking classes, food tours, and cultural experiences.
      </Typography>
      <Typography variant="body1" paragraph>
        Organize virtual dinner parties, tasting events, and cooking competitions with ease.
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/culinary-experiences">
        Explore Culinary Experiences
      </Button>
    </div>
  );
};

export default Home;
