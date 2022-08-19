import React from 'react'
import TextField from "@mui/material/TextField";
import { Button, Checkbox, Grid, FormControlLabel } from "@mui/material";
import Axios from "axios";
// import Grid from "@material-ui/core/Grid";
import grid from "@mui/material";
import { useState } from "react";
const UpdatePage = ({handleUpdate,formValues,setFormValues}) => {
  
  const [checked, setchecked] = useState(true);
  const handleInputChange = (e) => {
    var { name } = e.target;
    let checked=e.target.checked;
    if(name==='firattempted'||name==='solved'||name==='important'||name==='secattempt'){
       console.log(checked);
    }
    else{
      checked=e.target.value;
    }
    // console.log(name,checked);
    setFormValues({
      ...formValues,
      [name]: checked,
    });
  };


  return (
    <>
      <h1>Add Question</h1>
      <form >
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
            control={<Checkbox />}
            name="firattempted"
            onChange={handleInputChange}
            value={formValues.firattempted}
            label="firattempted"
          />
          <FormControlLabel
            control={<Checkbox  />}
            name="solved"
            value={formValues.solved}
            onChange={handleInputChange}
            label="solved"
          />
          <FormControlLabel
           control={<Checkbox  />}
            name="secattempt"
            value={formValues.secattempt}
            onChange={handleInputChange}
            label="secattempt"
          />
          <FormControlLabel
             control={<Checkbox  />}
            name="important"
            value={formValues.important}
            onChange={handleInputChange}
            label="important"
          />
        </Grid>
        <Button variant="contained" color="success" type="button" onClick={handleUpdate}>
          Update
        </Button>
      </form>
    </>
  );
};

export default UpdatePage