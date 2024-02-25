import React, { useState } from 'react';
import { Typography, TextField, Button, Divider, List, ListItem, ListItemText } from '@mui/material';

const SharingRecipesAndTips = () => {
  // State to manage shared recipes and tips
  const [recipesAndTips, setRecipesAndTips] = useState([]);
  const [newRecipeOrTip, setNewRecipeOrTip] = useState('');

  // Function to handle sharing a new recipe or tip
  const handleShareRecipeOrTip = () => {
    if (newRecipeOrTip.trim() !== '') {
      setRecipesAndTips([...recipesAndTips, { content: newRecipeOrTip, author: 'User', date: new Date().toLocaleDateString() }]);
      setNewRecipeOrTip('');
    }
  };

  return (
    <div>
      <Typography variant="h4">Sharing Recipes and Tips</Typography>

      {/* Input field for sharing a new recipe or tip */}
      <TextField
        label="Share a new recipe or tip"
        variant="outlined"
        fullWidth
        margin="normal"
        value={newRecipeOrTip}
        onChange={(e) => setNewRecipeOrTip(e.target.value)}
      />

      {/* Button to share recipe or tip */}
      <Button variant="contained" color="primary" onClick={handleShareRecipeOrTip}>Share</Button>

      <Divider style={{ margin: '20px 0' }} />

      {/* List of shared recipes and tips */}
      <List>
        {recipesAndTips.map((item, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={item.content}
              secondary={`Shared by ${item.author}, Date: ${item.date}`}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default SharingRecipesAndTips;
