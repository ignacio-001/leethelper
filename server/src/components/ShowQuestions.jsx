import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import DeleteQuestion from "./DeleteQuestion";
import UpdateQuestion from "./UpdateQuestion";
import { useContext } from "react";
import { Allpar } from "../App";
import { Box } from "@mui/material";
import clsx from "clsx";
import {Link} from "@mui/material";
const ShowQuestions = ({ handleDelete }) => {
  // const [che, setche] = useState(check)
  const send = useContext(Allpar);
  const columns: DataGrid[] = [
    {
      field: "name",
      headerClassName: "super-app-theme--header",
      headerName: "Question",
      width: 170,
    },
    { field: "topic", headerName: "Topic name", width: 130 },
    {
      field: "url",
      renderCell: (cellValues) => {
        return <Link href={`#${cellValues.row.url}`}>Link</Link>;
      },
    },
    {
      field: "solved",
      headerName: "Solved",
      type: 'boolean',
      cellClassName: (params) => {
        if (params.value == null) {
          return "";
        }

        return clsx("super-app", {
          negative: params.value === true,
          positive: params.value === false,
        });
      },
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
            setFormValues={send.setFormValues}
            setupdate={send.setupdate}
          />
        );
      },
      disableClickEventBubbling: false,
    },
  ];
  return (
    <>
      <Box
        sx={{
          marginTop: 50,
          height: 600,
          width: "100%",
          "& .super-app-theme--header": {
            backgroundColor: "rgba(255, 7, 0, 0.55)",
          },
          "& .super-app-theme--cell": {
            backgroundColor: "rgba(224, 183, 60, 0.55)",
            color: "#1a3e72",
            fontWeight: "600",
          },
          "& .super-app.negative": {
            backgroundColor: "rgba(157, 255, 118, 0.49)",
            color: "#1a3e72",
            fontWeight: "600",
          },
          "& .super-app.positive": {
            backgroundColor: "#d47483",
            color: "#1a3e72",
            fontWeight: "600",
          },
        }}
      >
        <DataGrid
          rows={send.problems}
          getRowId={(row) => row._id}
          columns={columns}
          pageSize={20}
          rowsPerPageOptions={[20]}
        />
      </Box>
    </>
  );
};

export default ShowQuestions;
