import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const PhotoUploadForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    description: '',
    tags: '',
    photo: null
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'photo') {
      setFormData({ ...formData, photo: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = 'Введіть нік';
    if (!formData.password || formData.password.length < 6) newErrors.password = 'Пароль має бути не менше 6 символів';
    if (!formData.email.includes('@')) newErrors.email = 'Некоректна електронна адреса';
    if (!formData.photo) newErrors.photo = 'Додайте фото';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Фото успішно завантажено!');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} p={3}>
      <Typography variant="h5">Форма завантаження фото</Typography>

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
        label="Пароль"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        error={!!errors.password}
        helperText={errors.password}
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

      <input
        accept="image/*"
        type="file"
        name="photo"
        onChange={handleChange}
        style={{ marginTop: 16, marginBottom: 8 }}
      />
      {errors.photo && <Typography color="error">{errors.photo}</Typography>}

      <TextField
        label="Опис"
        name="description"
        value={formData.description}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />

      <TextField
        label="Теги"
        name="tags"
        value={formData.tags}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />

      <Button type="submit" variant="contained" color="primary">Завантажити</Button>
    </Box>
  );
};

export default PhotoUploadForm;