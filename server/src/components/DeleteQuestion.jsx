import React from 'react'
import { Button } from '@mui/material';
import Axios from 'axios';
const DeleteQuestion = ({handleDelete,params}) => {
    return (
      <strong>
        <Button
          variant="contained"
          color="error"
          size="small"
          style={{ marginLeft: 16 }}
          onClick={() => {handleDelete(params)}
        }
        >
          DELETE
        </Button>
      </strong>
    );
  };

export default DeleteQuestion