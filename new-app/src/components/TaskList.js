import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  TextField,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
  Checkbox,
  ToggleButtonGroup,
  ToggleButton,
  Stack,
} from "@mui/material";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [displayedTasks, setDisplayedTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) {
      const parsed = JSON.parse(saved);
      setTasks(parsed);
      startDisplaying(parsed);
      setLoading(false);
    } else {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("tasks", JSON.stringify(data));
          setTasks(data);
          startDisplaying(data);
          setLoading(false);
        });
    }
  }, []);

  const startDisplaying = (data) => {
    let i = 0;
    setDisplayedTasks([]);
    const showTask = () => {
      if (i < data.length) {
        setDisplayedTasks((prev) => [...prev, data[i]]);
        i++;
        setTimeout(showTask, 100);
      }
    };
    showTask();
  };

  const handleStatusChange = (event, newFilter) => {
    if (newFilter !== null) setStatusFilter(newFilter);
  };

  const getFilteredTasks = () => {
    return displayedTasks.filter((task) => {
      if (!task || typeof task.title !== "string") return false;
      const matchesTitle = task.title.toLowerCase().includes(search.toLowerCase());
      const matchesStatus =
        statusFilter === "all" ||
        (statusFilter === "completed" && task.completed) ||
        (statusFilter === "pending" && !task.completed);
      return matchesTitle && matchesStatus;
    });
  };

  const filteredTasks = getFilteredTasks();

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Список завдань
      </Typography>

      <Stack spacing={2} sx={{ mb: 3 }}>
        <TextField
          label="Пошук завдання"
          variant="outlined"
          fullWidth
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <ToggleButtonGroup
          value={statusFilter}
          exclusive
          onChange={handleStatusChange}
          aria-label="Фільтр статусу"
        >
          <ToggleButton value="all">Всі</ToggleButton>
          <ToggleButton value="completed">Завершені</ToggleButton>
          <ToggleButton value="pending">Не виконані</ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      {loading ? (
        <CircularProgress />
      ) : (
        <List>
          {filteredTasks.map((task) => (
            <ListItem key={task.id} divider>
              <Checkbox checked={task.completed} disabled />
              <ListItemText
                primary={task.title}
                secondary={task.completed ? "Завершено" : "Не виконано"}
              />
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
}
