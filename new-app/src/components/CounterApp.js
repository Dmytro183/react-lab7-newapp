import React, { useState, useEffect } from "react";
import { Button, Box, Typography, IconButton } from "@mui/material";
import { Add, Remove, Delete } from "@mui/icons-material";

const CounterApp = () => {
  const [counters, setCounters] = useState([]);

  // Завантаження з localStorage при старті
  useEffect(() => {
    const saved = localStorage.getItem("counters");
    if (saved) {
      setCounters(JSON.parse(saved));
    }
  }, []);

  // Збереження у localStorage при зміні counters
  useEffect(() => {
    localStorage.setItem("counters", JSON.stringify(counters));
  }, [counters]);

  const addCounter = () => {
    setCounters([...counters, { id: Date.now(), value: 0 }]);
  };

  const removeCounter = (id) => {
    setCounters(counters.filter((counter) => counter.id !== id));
  };

  const increment = (id) => {
    setCounters(
      counters.map((counter) =>
        counter.id === id ? { ...counter, value: counter.value + 1 } : counter
      )
    );
  };

  const decrement = (id) => {
    setCounters(
      counters.map((counter) =>
        counter.id === id ? { ...counter, value: counter.value - 1 } : counter
      )
    );
  };

  const total = counters.reduce((sum, counter) => sum + counter.value, 0);

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Лічильники
      </Typography>

      <Button variant="contained" color="primary" onClick={addCounter} sx={{ mb: 2 }}>
        Додати лічильник
      </Button>

      {counters.map((counter) => (
        <Box
          key={counter.id}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            mb: 1,
            borderBottom: "1px solid #ccc",
            pb: 1,
          }}
        >
          <Typography>Значення: {counter.value}</Typography>
          <IconButton color="success" onClick={() => increment(counter.id)}>
            <Add />
          </IconButton>
          <IconButton color="error" onClick={() => decrement(counter.id)}>
            <Remove />
          </IconButton>
          <IconButton color="secondary" onClick={() => removeCounter(counter.id)}>
            <Delete />
          </IconButton>
        </Box>
      ))}

      <Typography variant="h6" sx={{ mt: 2 }}>
        Загальна сума: {total}
      </Typography>
    </Box>
  );
};

export default CounterApp;
