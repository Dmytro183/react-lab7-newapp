import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

export default function CartItem({ item, onQuantityChange, onDelete }) {
  const handleAdd = () => {
    if (!item.max || item.quantity < item.max) {
      onQuantityChange(item.name, item.quantity + 1);
    }
  };

  const handleRemove = () => {
    if (item.quantity > (item.min ?? 0)) {
      onQuantityChange(item.name, item.quantity - 1);
    }
  };

  const handleDelete = () => {
    onDelete(item.name);
  };

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" p={1} borderBottom="1px solid #ddd">
      <Typography sx={{ width: "25%" }}>{item.name}</Typography>
      <Typography sx={{ width: "10%" }}>{item.price}</Typography>
      <Box display="flex" alignItems="center" sx={{ width: "20%" }}>
        <IconButton onClick={handleRemove}><RemoveIcon /></IconButton>
        <Typography>{item.quantity}</Typography>
        <IconButton onClick={handleAdd}><AddIcon /></IconButton>
      </Box>
      <Typography sx={{ width: "15%" }}>{item.price * item.quantity}</Typography>
      <IconButton onClick={handleDelete}><DeleteIcon /></IconButton>
    </Box>
  );
}
