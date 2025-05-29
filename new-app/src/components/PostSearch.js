import React, { useEffect, useState } from "react";
import {
  TextField,
  Typography,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  Container,
  Paper,
} from "@mui/material";

export default function PostSearch() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  // Завантаження даних з API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setFilteredPosts(data);
        setLoading(false);
      });
  }, []);

  // Фільтрація постів за заголовком
  useEffect(() => {
    const results = posts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(results);
  }, [searchTerm, posts]);

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Пошук постів
      </Typography>

      <TextField
        label="Пошук за заголовком"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ mb: 3 }}
      />

      {loading ? (
        <CircularProgress />
      ) : (
        <Paper>
          <List>
            {filteredPosts.map((post) => (
              <ListItem key={post.id} divider>
                <ListItemText
                  primary={post.title}
                  secondary={post.body}
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
    </Container>
  );
}
