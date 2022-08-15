import React from "react";
import { Button } from "@mui/material";
import Axios from "axios";
const DeleteQuestion = (params) => {
  return (
    <strong>
      <Button
        variant="contained"
        color="error"
        size="small"
        style={{ marginLeft: 16 }}
        onClick={() => {
          // console.log(params.row);
          const id = params.row._id;
          console.log(id);
          Axios.delete(`http://localhost:3001/api/${id}`)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
        }}
      >
        DELETE
      </Button>
    </strong>
  );
};

export default DeleteQuestion;
