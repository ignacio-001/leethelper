import { React, useContext } from "react";
import { DataGrid } from "@mui/x-data-grid";
import DeleteQuestion from "../DeleteQuestion";
import UpdateQuestion from "../UpdateQuestion";
import Homepage from "../Homepage";
import { Allpar } from "../../App";
import { useEffect } from "react";
import axios from "axios";
const Important = ({ problems, setproblems }) => {
  const send=useContext(Allpar)
  useEffect(() => {
    axios
    .get("http://localhost:3001/api/important")
    .then((res) => send.setproblems(res.data.problems))
    .catch((err) => console.log(err));
  }, [])
  
  return (
    <>
    <Homepage/>
    </>
  )
};

export default Important;
