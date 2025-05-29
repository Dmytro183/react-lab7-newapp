import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormLabel,
  Checkbox,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  TextareaAutosize,
  Typography,
  Avatar,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper
} from '@mui/material';

const initialState = {
  name: '',
  email: '',
  gender: 'male',
  agree: false,
  education: '',
  about: '',
  photo: null,
};

const FormComponent = () => {
  const [formData, setFormData] = useState(initialState);
  const [submittedData, setSubmittedData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updated = [...submittedData];
      updated[editIndex] = formData;
      setSubmittedData(updated);
      setEditIndex(null);
    } else {
      setSubmittedData([...submittedData, formData]);
    }
    setFormData(initialState);
  };

  const handleReset = () => {
    setFormData(initialState);
    setEditIndex(null);
  };

  const handleEdit = (index) => {
    setFormData(submittedData[index]);
    setEditIndex(index);
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          p: 2,
          backgroundColor: '#f5f5f5',
          borderRadius: 2,
        }}
      >
        <TextField
          label="Ім’я"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <TextField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <FormLabel>Стать</FormLabel>
        <RadioGroup
          row
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <FormControlLabel value="male" control={<Radio />} label="Чоловіча" />
          <FormControlLabel value="female" control={<Radio />} label="Жіноча" />
        </RadioGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.agree}
              onChange={handleChange}
              name="agree"
            />
          }
          label="Згоден з правилами"
        />
        <FormControl fullWidth>
          <InputLabel>Освіта</InputLabel>
          <Select
            name="education"
            value={formData.education}
            onChange={handleChange}
            required
          >
            <MenuItem value="secondary">Середня</MenuItem>
            <MenuItem value="higher">Вища</MenuItem>
            <MenuItem value="professional">Професійна</MenuItem>
          </Select>
        </FormControl>
        <TextareaAutosize
          minRows={3}
          name="about"
          placeholder="Про себе"
          value={formData.about}
          onChange={handleChange}
          style={{ padding: '1rem', borderRadius: '8px', borderColor: '#ccc' }}
        />
        <Button variant="contained" component="label">
          Завантажити фото
          <input hidden type="file" name="photo" accept="image/*" onChange={handleChange} />
        </Button>
        <Box display="flex" justifyContent="space-between" gap={2}>
          <Button type="submit" variant="contained" color="primary">
            {editIndex !== null ? 'Оновити' : 'Надіслати'}
          </Button>
          <Button variant="outlined" color="secondary" onClick={handleReset}>
            Скинути
          </Button>
        </Box>
      </Box>

      {submittedData.length > 0 && (
        <Paper sx={{ mt: 4, p: 2 }}>
          <Typography variant="h6">Результати</Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Ім’я</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Стать</TableCell>
                <TableCell>Освіта</TableCell>
                <TableCell>Про себе</TableCell>
                <TableCell>Фото</TableCell>
                <TableCell>Дії</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {submittedData.map((user, index) => (
                <TableRow key={index}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.gender === 'male' ? 'Чоловіча' : 'Жіноча'}</TableCell>
                  <TableCell>{user.education}</TableCell>
                  <TableCell>{user.about}</TableCell>
                  <TableCell>
                    {user.photo && (
                      <Avatar
                        alt="Фото"
                        src={URL.createObjectURL(user.photo)}
                        sx={{ width: 56, height: 56 }}
                      />
                    )}
                  </TableCell>
                  <TableCell>
                    <Button variant="text" onClick={() => handleEdit(index)}>
                      Редагувати
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      )}
    </>
  );
};

export default FormComponent;
