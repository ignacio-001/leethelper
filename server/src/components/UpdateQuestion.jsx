import React from 'react'
import { Button } from '@mui/material';
import UpdatePage from './UpdatePage';
import axios from 'axios';
const UpdateQuestion = ({setFormValues,params,setupdate}) => {
    return (
      <strong>
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ marginLeft: 16 }}
          onClick={() => {
            setFormValues(params.row);
            console.log("hello");
            setupdate(false);
          }}
        >
          UPDATE
        </Button>
      </strong>
    );
  };

export default UpdateQuestion