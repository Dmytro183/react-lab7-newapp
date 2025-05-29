import React, { useState } from 'react';
import { Button, Typography, Box } from '@mui/material';

const Counter = ({ initial = 0, min = -Infinity, max = Infinity }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < max) setCount(count + 1);
  };

  const decrement = () => {
    if (count > min) setCount(count - 1);
  };

  const reset = () => setCount(initial);

  return (
    <Box display="flex" alignItems="center" gap={2} border={1} borderRadius={2} p={2} m={1}>
      <Typography>Поточний рахунок: {count}</Typography>
      <Button onClick={increment} variant="outlined">+</Button>
      <Button onClick={decrement} variant="outlined">-</Button>
      <Button onClick={reset} variant="outlined">Reset</Button>
    </Box>
  );
};

export default Counter;
