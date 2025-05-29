import React from 'react';
import MyCounter from './MyCounter';
import { Stack } from '@mui/material';

const counters = [
  { id: 1, initial: 2, min: -5, max: 5 },
  { id: 2, initial: 0, min: 0, max: 3 },
  { id: 3, initial: -2, min: -3, max: 0 },
];

const CounterList = () => {
  return (
    <Stack spacing={4} alignItems="center">
      {counters.map(c => (
        <MyCounter key={c.id} {...c} />
      ))}
    </Stack>
  );
};

export default CounterList;