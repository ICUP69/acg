
import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Box, Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const logoUrl = './acglogo.jpg'; 

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: 'HOME', link: '/' },
    { text: 'DRESSES', link: '/dresses' },
    { text: 'TOPS', link: '/tops' },
    { text: 'JUMPSUITS & ROMPERS', link: '/jumpsuits' },
    { text: 'SETS', link: '/sets' },
    { text: 'BOTTOMS', link: '/bottoms' },
    { text: 'OUTERWEAR', link: '/outerwear' },
  ];

  return (
    <AppBar position="static" style={{ backgroundColor: 'white', boxShadow: 'none', width: '95%' }}>
      <Toolbar style={{ flexDirection: 'column', alignItems: 'center', width: '94%' }}>
        <Box display="flex" justifyContent="center" alignItems="center" width="100%">
          <img src={logoUrl} alt="Logo" style={{ height: '50px', marginBottom: '10px' }} />
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'space-between', width: '100%', maxWidth: 'md' }}>
          {menuItems.map((item) => (
            <Button key={item.text} component={Link} to={item.link} style={{ color: 'black' }}>
              {item.text}
            </Button>
          ))}
        </Box>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ display: { xs: 'flex', md: 'none' }, position: 'absolute', right: '1px' }} onClick={toggleDrawer(true)}>
          <MenuIcon style={{ color: 'black' }} />
        </IconButton>
      </Toolbar>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {menuItems.map((item) => (
              <ListItem button key={item.text} component={Link} to={item.link}>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
