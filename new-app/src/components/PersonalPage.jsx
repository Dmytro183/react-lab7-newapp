import React, { Component } from 'react';
import { Typography, TextField, Button, Box } from '@mui/material';

class PersonalPage extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      name: 'Іван Іванов',
      phone: '+380123456789',
      email: 'ivan@example.com',
      city: 'Черкаси'
    };
    this.state = { ...this.initialState };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  resetFields = () => {
    this.setState({ ...this.initialState });
  };

  render() {
    return (
      <Box p={3}>
        <Typography variant="h4" gutterBottom>
          Персональна сторінка
        </Typography>

        <TextField
          label="ПІБ"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          fullWidth
          margin="normal"
        />

        <TextField
          label="Телефон"
          name="phone"
          value={this.state.phone}
          onChange={this.handleChange}
          fullWidth
          margin="normal"
        />

        <TextField
          label="Email"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
          fullWidth
          margin="normal"
        />

        <TextField
          label="Місто"
          name="city"
          value={this.state.city}
          onChange={this.handleChange}
          fullWidth
          margin="normal"
        />

        <Button variant="contained" color="secondary" onClick={this.resetFields}>
          Скинути
        </Button>
      </Box>
    );
  }
}

export default PersonalPage;