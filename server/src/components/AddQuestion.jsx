import React from "react";
import TextField from "@mui/material/TextField";
import { Button, Checkbox, Grid, FormControlLabel } from "@mui/material";
import Axios from "axios";
// import Grid from "@material-ui/core/Grid";
import grid from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
const defaultValues = {
  name: "",
  topic: "",
  url: "",
  solved: false,
  important: false,
  firattempted: false,
  secattempt: false,
};
const AddQuestion = () => {
  const [formValues, setFormValues] = useState(defaultValues);
  const [checked, setchecked] = useState(true);
  const handleInputChange = (e) => {
    var { name, value } = e.target;
    if (value === "on") value = true;
    if (name === "important") setchecked(!checked);
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    Axios.post("http://localhost:3001/api/send", formValues).then((res) => {
      console.log(res);
    });
    console.log(formValues);
  };

  return (
    <>
      <h1>Add Question</h1>
      <form onSubmit={handleSubmit}>
        {/* <Grid container alignItems="center" justify="center" direction="column"> */}
        <Grid item>
          <TextField
            id="Question-input"
            name="name"
            label="Questions"
            type="text"
            fullWidth
            margin="dense"
            value={formValues.name}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item>
          <TextField
            id="Question-input"
            name="url"
            label="URL"
            type="text"
            fullWidth
            margin="dense"
            value={formValues.url}
            onChange={handleInputChange}
          />
        </Grid>
        <TextField
          id="topic-input"
          name="topic"
          label="Topic"
          type="text"
          fullWidth
          margin="dense"
          value={formValues.topic}
          onChange={handleInputChange}
        />
        {/* </Grid> */}

        <Grid item>
          <FormControlLabel
            control={<Checkbox defaultunChecked />}
            name="firattempted"
            label="Firstattempt"
          />
          <FormControlLabel
            control={<Checkbox defaultunChecked />}
            name="solved"
            onChange={handleInputChange}
            label="solved"
          />
          <FormControlLabel
            control={<Checkbox defaultunChecked />}
            name="secattempt"
            onChange={handleInputChange}
            label="secattempt"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                name="important"
                onChange={handleInputChange}
                inputProps={{ "aria-label": "controlled" }}
              />
            }
            label="important"
          />
        </Grid>
        <Button variant="contained" color="success" type="submit">
          Submit
        </Button>
      </form>
    </>
  );
};

export default AddQuestion;
