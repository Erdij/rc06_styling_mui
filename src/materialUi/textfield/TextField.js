import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        required
        error
      />
      <TextField id="outlined-basic" label="Surname" variant="outlined" />
      <TextField
        id="outlined-basic"
        label="Adress"
        variant="outlined"
        multiline
      />
    </Box>
  );
}
