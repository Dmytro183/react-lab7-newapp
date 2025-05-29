import React, { useState } from 'react';
import {
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Typography,
  Box
} from '@mui/material';

const DynamicRadioForm = ({ options }) => {
  const [selectedOptionId, setSelectedOptionId] = useState(null);

  const handleChange = (event) => {
    setSelectedOptionId(Number(event.target.value));
  };

  const selectedLabel = options.find(opt => opt.id === selectedOptionId)?.label;

  return (
    <Box p={3} border={1} borderRadius={2} maxWidth={400}>
      <Typography variant="h6">Оберіть опцію:</Typography>

      <FormControl component="fieldset">
        <RadioGroup value={selectedOptionId?.toString() || ''} onChange={handleChange}>
          {options.map(option => (
            <FormControlLabel
              key={option.id}
              value={option.id.toString()}
              control={<Radio />}
              label={option.label}
            />
          ))}
        </RadioGroup>
      </FormControl>

      <Typography variant="body1" mt={2}>
        {selectedOptionId ? `Вибрано: ${selectedLabel}` : 'Нічого не вибрано'}
      </Typography>
    </Box>
  );
};

export default DynamicRadioForm;