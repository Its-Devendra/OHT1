import React, { useState } from 'react';
import { Typography, TextField, Button, Divider, List, ListItem, ListItemText } from '@mui/material';

const InteractionWithChefs = () => {
  // State to manage chat messages
  const [chatMessages, setChatMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  // Function to handle sending a new message
  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setChatMessages([...chatMessages, { text: newMessage, sender: 'user' }]);
      setNewMessage('');
      // Simulate response from chef after 1 second
      setTimeout(() => {
        setChatMessages([...chatMessages, { text: 'Thank you for your message!', sender: 'chef' }]);
      }, 1000);
    }
  };

  return (
    <div>
      <Typography variant="h4">Interaction with Chefs</Typography>

      {/* Chat messages */}
      <List style={{ maxHeight: '400px', overflowY: 'auto' }}>
        {chatMessages.map((message, index) => (
          <ListItem key={index} alignItems={message.sender === 'chef' ? 'flex-start' : 'flex-end'}>
            <ListItemText
              primary={message.text}
              secondary={message.sender === 'chef' ? 'Chef' : 'You'}
            />
          </ListItem>
        ))}
      </List>

      {/* Input field for sending a new message */}
      <TextField
        label="Send a message to the chef"
        variant="outlined"
        fullWidth
        margin="normal"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />

      {/* Button to send message */}
      <Button variant="contained" color="primary" onClick={handleSendMessage}>Send</Button>
    </div>
  );
};

export default InteractionWithChefs;
