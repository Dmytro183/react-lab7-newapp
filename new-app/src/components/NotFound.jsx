import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Box textAlign="center" p={5}>
      <Typography variant="h3" gutterBottom color="error">
        404
      </Typography>
      <Typography variant="h5" gutterBottom>
        Сторінку не знайдено
      </Typography>
      <Typography variant="body1" gutterBottom>
        Схоже, що такої сторінки не існує. Перейдіть на головну:
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/">
        На головну
      </Button>
    </Box>
  );
};

export default NotFound;
