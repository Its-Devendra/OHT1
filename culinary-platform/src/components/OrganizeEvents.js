import React, { useState } from 'react';
import { Typography, TextField, Button, Divider, List, ListItem, ListItemText } from '@mui/material';

const OrganizingEvents = () => {
  // State to manage organized events
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState('');

  // Function to handle organizing a new event
  const handleOrganizeEvent = () => {
    if (newEvent.trim() !== '') {
      setEvents([...events, { title: newEvent, organizer: 'User', date: new Date().toLocaleDateString() }]);
      setNewEvent('');
    }
  };

  return (
    <div>
      <Typography variant="h4">Organizing Events</Typography>

      {/* Input field for organizing a new event */}
      <TextField
        label="Organize a new event"
        variant="outlined"
        fullWidth
        margin="normal"
        value={newEvent}
        onChange={(e) => setNewEvent(e.target.value)}
      />

      {/* Button to organize event */}
      <Button variant="contained" color="primary" onClick={handleOrganizeEvent}>Organize Event</Button>

      <Divider style={{ margin: '20px 0' }} />

      {/* List of organized events */}
      <List>
        {events.map((event, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={event.title}
              secondary={`Organized by ${event.organizer}, Date: ${event.date}`}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default OrganizingEvents;
