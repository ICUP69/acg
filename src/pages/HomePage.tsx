// src/pages/HomePage.tsx
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const HomePage: React.FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      width="100%"
    >
      <Container maxWidth="lg">
        <Typography variant="h4" gutterBottom align="center">
          Welcome to My Clothing Brand
        </Typography>
      </Container>
    </Box>
  );
};

export default HomePage;
