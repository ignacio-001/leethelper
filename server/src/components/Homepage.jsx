import {useContext} from "react";
import React from "react";
import { AddQuestion } from "./AddQuestion";
import ShowQuestion from "./ShowQuestions";
import axios from "axios";
import { useState, useEffect } from "react";
import UpdatePage from "./UpdatePage";
import { Allpar } from "../App";
let dele=false;

const Homepage = () => {
  const {handleDelete} = useContext(Allpar);
  const send=useContext(Allpar);
 


  const handleUpdate = () => {
    console.log("heeeeee");
    const id=send.formValues._id;
    console.log(id);
    console.log(send.formValues);
    axios
      .patch(`http://localhost:3001/api/${id}`,{
        name:send.formValues.name,
        url:send.formValues.url,
        solved:send.formValues.solved,
        important:send.formValues.important,
        firattempted:send.formValues.firattempted,
        topic:send.formValues.topic,
        secattempt:send.formValues.secattempt,
      })
    send.setcheck(!send.check);
    send.setupdate(true);
    send.setFormValues(send.defaultValues);
  };
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/allproblems")
      .then((res) => send.setproblems(res.data.problems))
      .catch((err) => console.log(err));
  }, [send.check]);

  return (
    <React.Fragment>
      {send.update ? (
        <ShowQuestion
          handleDelete={handleDelete}
        />
      ) : (
        <UpdatePage
          handleUpdate={handleUpdate}
          formValues={send.formValues}
          setFormValues={send.setFormValues}
        />
      )}
    </React.Fragment>
  );
};
export default Homepage;
