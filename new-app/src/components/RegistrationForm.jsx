import React, { useState } from 'react';
import { Box, TextField, Button, Typography, MenuItem } from '@mui/material';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    gender: '',
    age: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = 'Введіть нік';
    if (!formData.email.includes('@')) newErrors.email = 'Некоректна електронна адреса';
    if (!formData.gender) newErrors.gender = 'Оберіть стать';
    if (!formData.age || isNaN(formData.age)) newErrors.age = 'Введіть вік';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Форма успішно надіслана!');
      setFormData({ username: '', email: '', gender: '', age: '' });
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} p={3}>
      <Typography variant="h5">Реєстрація</Typography>

      <TextField
        label="Нік"
        name="username"
        value={formData.username}
        onChange={handleChange}
        error={!!errors.username}
        helperText={errors.username}
        fullWidth
        margin="normal"
      />

      <TextField
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        error={!!errors.email}
        helperText={errors.email}
        fullWidth
        margin="normal"
      />

      <TextField
        select
        label="Стать"
        name="gender"
        value={formData.gender}
        onChange={handleChange}
        error={!!errors.gender}
        helperText={errors.gender}
        fullWidth
        margin="normal"
      >
        <MenuItem value="чоловіча">Чоловіча</MenuItem>
        <MenuItem value="жіноча">Жіноча</MenuItem>
      </TextField>

      <TextField
        label="Вік"
        name="age"
        value={formData.age}
        onChange={handleChange}
        error={!!errors.age}
        helperText={errors.age}
        fullWidth
        margin="normal"
      />

      <Button type="submit" variant="contained" color="primary">Зареєструватися</Button>
    </Box>
  );
};

export default RegistrationForm;