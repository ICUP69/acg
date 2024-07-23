
import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import ProductCard from '../components/ProductCard';

const HomePage: React.FC = () => {
  const products = [
    {
      image: 'https://via.placeholder.com/150',
      name: 'Product 1',
      price: '$10.00',
    },
    {
      image: 'https://via.placeholder.com/150',
      name: 'Product 2',
      price: '$20.00',
    },
  ];

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
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {products.map((product) => (
            <Grid item key={product.name} xs={12} sm={6} md={4}>
              <ProductCard image={product.image} name={product.name} price={product.price} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HomePage;
