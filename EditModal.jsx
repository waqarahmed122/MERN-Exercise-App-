import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

const EditModal = ({ open, handleClose }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography variant="h6" component="h2" id="modal-modal-title">
          Edit Activity
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            id="username"
            label="Username"
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <TextField
            id="activity"
            label="Activity"
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <TextField
            id="duration"
            label="Duration"
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <TextField
            id="date"
            label="Date"
            type="date"
            defaultValue={new Date().toISOString().slice(0, 10)}
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <TextField
            id="time"
            label="Time"
            type="time"
            defaultValue={new Date().toISOString().slice(11, 16)}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <TextField
            id="time"
            label="Time"
            type="text"
            inputProps={{
              pattern: "(\\d+\\s*min)|(\\d+\\s*hour)",
            }}
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <Button type="submit" variant="contained" color="primary">
            Update
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default EditModal;