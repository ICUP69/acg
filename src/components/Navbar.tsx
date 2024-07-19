// src/components/Navbar.tsx
import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <AppBar
      position="static"
      style={{ backgroundColor: 'white', boxShadow: 'none', width: '100%' }}
    >
      <Toolbar style={{ justifyContent: 'center' }}>
        <Box display="flex" justifyContent="space-between" width="100%" maxWidth="lg">
          <Button component={Link} to="/" style={{ color: 'black' }}>
            HOME
          </Button>
          <Button component={Link} to="/dresses" style={{ color: 'black' }}>
            DRESSES
          </Button>
          <Button component={Link} to="/tops" style={{ color: 'black' }}>
            TOPS
          </Button>
          <Button component={Link} to="/jumpsuits" style={{ color: 'black' }}>
            JUMPSUITS & ROMPERS
          </Button>
          <Button component={Link} to="/sets" style={{ color: 'black' }}>
            SETS
          </Button>
          <Button component={Link} to="/bottoms" style={{ color: 'black' }}>
            BOTTOMS
          </Button>
          <Button component={Link} to="/outerwear" style={{ color: 'black' }}>
            OUTERWEAR
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
