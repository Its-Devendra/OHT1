import React, { useState, useEffect } from 'react';
import { Typography, Grid, Card, CardActionArea, CardContent, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';

const CulinaryExperiences = () => {
  // State to store culinary experiences data
  const [culinaryExperiences, setCulinaryExperiences] = useState([]);

  // useEffect to fetch culinary experiences data when component mounts
  useEffect(() => {
    // Fetch culinary experiences data from backend or API
    // Update culinaryExperiences state with the fetched data
  }, []);

  return (
    <div>
      <Typography variant="h2" gutterBottom>Culinary Experiences</Typography>
      <Grid container spacing={3}>
        {culinaryExperiences.map((experience) => (
          <Grid item xs={12} sm={6} md={4} key={experience.id}>
            <Card>
              <CardActionArea component={Link} to={`/culinary-experiences/${experience.id}`}>
                <CardMedia
                  component="img"
                  height="200"
                  image={experience.image}
                  alt={experience.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {experience.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {experience.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CulinaryExperiences;
  