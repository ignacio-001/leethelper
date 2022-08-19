import React from "react";
import { AddQuestion } from "./AddQuestion";
import ShowQuestion from "./ShowQuestions";
import axios from "axios";
import { useState, useEffect } from "react";
import UpdatePage from "./UpdatePage";
const Homepage = () => {
  const [check, setcheck] = useState(false);
  const [update, setupdate] = useState(true);
  const defaultValues = {
    name: "",
    topic: "",
    url: "",
    solved: false,
    important: false,
    firattempted: false,
    secattempt: false,
  };
  const [formValues, setFormValues] = useState(defaultValues);
  const handleSubmit = (event) => {
    setcheck(!check);
    event.preventDefault();
    axios.post("http://localhost:3001/api/send", formValues).then((res) => {
      console.log(res);
    });
    console.log(formValues);
    setFormValues(defaultValues);
  };
  const handleDelete = (params) => {
    const id = params.row._id;
    console.log(id);
    axios
      .delete(`http://localhost:3001/api/${id}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    setcheck(!check);
  };
  const handleUpdate = () => {
    console.log("heeeeee");
    const id=formValues._id;
    console.log(id);
    console.log(formValues);
    axios
      .patch(`http://localhost:3001/api/${id}`,{
        name:formValues.name,
        url:formValues.url,
        solved:formValues.solved,
        important:formValues.important,
        firattempted:formValues.firattempted,
        topic:formValues.topic,
        secattempt:formValues.secattempt,
      })
    setcheck(!check);
    setupdate(true);
    setFormValues(defaultValues);
  };
  const [problems, setproblems] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/allproblems")
      .then((res) => setproblems(res.data.problems))
      .catch((err) => console.log(err));
  }, [check]);

  return (
    <React.Fragment>
      <AddQuestion
        handleSubmit={handleSubmit}
        formValues={formValues}
        setFormValues={setFormValues}
      />
      {update ? (
        <ShowQuestion
          handleDelete={handleDelete}
          problems={problems}
          setFormValues={setFormValues}
          setupdate={setupdate}
        />
      ) : (
        <UpdatePage
          handleUpdate={handleUpdate}
          formValues={formValues}
          setFormValues={setFormValues}
        />
      )}
    </React.Fragment>
  );
};

export default Homepage;
