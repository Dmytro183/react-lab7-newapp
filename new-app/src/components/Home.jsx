import React from 'react';
import { Typography, Box, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  const categories = [
    { name: 'Шини', path: '/category/shini' },
    { name: 'Диски', path: '/category/dysky' },
    { name: 'Оливи', path: '/category/olyvy' }
  ];

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Ласкаво просимо до інтернет-магазину NaKolesah!
      </Typography>
      <Typography variant="body1" gutterBottom>
        У нашому магазині ви знайдете якісні автошини, диски та моторні оливи.
      </Typography>

      <Typography variant="h6" mt={4}>
        Популярні категорії:
      </Typography>
      <List>
        {categories.map((category, index) => (
          <ListItem
            key={index}
            button
            component={Link}
            to={category.path}
          >
            <ListItemText primary={category.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Home;
