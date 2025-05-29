import React, { useState } from 'react';
import {
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
  Typography,
  Box
} from '@mui/material';

const RadioForm = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const resetSelection = () => {
    setSelectedOption('');
  };

  return (
    <Box p={3} border={1} borderRadius={2} maxWidth={400}>
      <Typography variant="h6">Оберіть варіант:</Typography>

      <FormControl component="fieldset">
        <RadioGroup value={selectedOption} onChange={handleChange}>
          <FormControlLabel value="Варіант 1" control={<Radio />} label="Варіант 1" />
          <FormControlLabel value="Варіант 2" control={<Radio />} label="Варіант 2" />
          <FormControlLabel value="Варіант 3" control={<Radio />} label="Варіант 3" />
        </RadioGroup>
      </FormControl>

      <Typography variant="body1" mt={2}>
        {selectedOption ? `Вибрано: ${selectedOption}` : 'Нічого не вибрано'}
      </Typography>

      <Button onClick={resetSelection} variant="outlined" color="secondary" sx={{ mt: 2 }}>
        Скинути
      </Button>
    </Box>
  );
};

export default RadioForm;

