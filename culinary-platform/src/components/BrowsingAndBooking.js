import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, Grid } from '@mui/material';

const CulinaryExperiences = () => {
  // State to store culinary experiences
  const [culinaryExperiences, setCulinaryExperiences] = useState([]);

  // useEffect to fetch culinary experiences when component mounts
  useEffect(() => {
    // Fetch culinary experiences from backend or API
    // Update culinaryExperiences state with the fetched data
    // For example:
    // const experiencesData = fetchCulinaryExperiences();
    // setCulinaryExperiences(experiencesData);
    // Mock data for demonstration
    setCulinaryExperiences(mockCulinaryExperiences);
  }, []);

  return (
    <div>
      <Typography variant="h4">Browse Culinary Experiences</Typography>
      <Grid container spacing={2}>
        {culinaryExperiences.map((experience) => (
          <Grid item xs={12} sm={6} md={4} key={experience.id}>
            <Typography variant="h6">{experience.title}</Typography>
            <Typography variant="body1">{experience.description}</Typography>
            <Typography variant="body2">Instructor: {experience.instructor}</Typography>
            <Typography variant="body2">Date: {experience.date}</Typography>
            <Button variant="contained" color="primary" component={Link} to={`/experience/${experience.id}`}>
              View Details
            </Button>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CulinaryExperiences;

// Mock culinary experiences data
const mockCulinaryExperiences = [
  {
    id: 1,
    title: 'Traditional French Cuisine',
    description: 'Discover the secrets of classic French dishes with Chef Pierre.',
    instructor: 'Chef Pierre',
    date: '2024-04-10',
  },
  {
    id: 2,
    title: 'Japanese Sushi Masterclass',
    description: 'Learn the art of making sushi from scratch with Chef Hiroshi.',
    instructor: 'Chef Hiroshi',
    date: '2024-05-05',
  },
  // Add more culinary experiences as needed
];
