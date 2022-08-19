import React, { useEffect } from "react";
import Axios from "axios";
import { useState } from "react";
import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import DeleteQuestion from "./DeleteQuestion";
import UpdateQuestion from "./UpdateQuestion";

const ShowQuestions = ({
  handleDelete,
  problems,
  setFormValues,
  setupdate,
}) => {
  // const [che, setche] = useState(check)
  const columns: DataGrid[] = [
    { field: "name", headerName: "Question", width: 170 },
    { field: "topic", headerName: "Topic name", width: 130 },
    { field: "url", headerName: "URL", width: 170 },
    {
      field: "solved",
      headerName: "Solved",
      type: "Boolean",
      width: 90,
    },
    {
      field: "firattempted",
      headerName: "First-Attempt",
      type: "Boolean",
      width: 130,
    },
    {
      field: "important",
      headerName: "Important",
      type: "Boolean",
      width: 130,
    },
    {
      field: "secattempt",
      headerName: "Second-Attempt",
      type: "Boolean",
      width: 130,
    },
    {
      field: "DELETE",
      headerName: " Delete",
      width: 150,
      renderCell: (param) => {
        return <DeleteQuestion handleDelete={handleDelete} params={param} />;
      },
      disableClickEventBubbling: false,
    },
    {
      field: "update",
      headerName: " Update",
      width: 150,
      renderCell: (param) => {
        return (
          <UpdateQuestion
            params={param}
            setFormValues={setFormValues}
            setupdate={setupdate}
          />
        );
      },
      disableClickEventBubbling: false,
    },
  ];
  return (
    <>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={problems}
          getRowId={(row) => row._id}
          columns={columns}
          pageSize={20}
          rowsPerPageOptions={[20]}
        />
      </div>
    </>
  );
};

export default ShowQuestions;
