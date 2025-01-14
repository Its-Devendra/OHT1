import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenu}>
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} component={Link} to="/">Home</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/culinary-experiences">Culinary Experiences</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/about">About</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/sharing-recipes-tips">Sharing Recipes and Tips</MenuItem>
          </Menu>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Culinary Platform
          </Typography>
          <Button color="inherit" component={Link} to="/login">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
