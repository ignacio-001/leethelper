import React from 'react'
import { Button } from '@mui/material';
const UpdateQuestion = (params) => {
    return (
      <strong>
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ marginLeft: 16 }}
          onClick={() => {
            // console.log(params.row);
          }}
        >
          UPDATE
        </Button>
      </strong>
    );
  };

export default UpdateQuestion