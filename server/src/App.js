import React from "react";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Important from "./components/QuestionType/Important";
import { useState } from "react";
import { createContext } from "react";
import axios from "axios";
import Solved from "./components/QuestionType/Solved";
import { AddQuestion } from "./components/AddQuestion";
export const Allpar = createContext();
const App = () => {
  const defaultValues = {
    name: "",
    topic: "",
    url: "",
    solved: false,
    important: false,
    firattempted: false,
    secattempt: false,
  };
  const [problems, setproblems] = useState([]);
  const [value, setValue] = useState();
  const [check, setcheck] = useState(false);
  const [update, setupdate] = useState(true);
  const [formValues, setFormValues] = useState(defaultValues);
  function handleDelete(params) {
    const id = params.row._id;
    console.log(id);
    axios
      .delete(`http://localhost:3001/api/${id}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    setcheck(!check);
  }
  const handleSubmit = (event) => {
    send.setcheck(!send.check);
    event.preventDefault();
    axios.post("http://localhost:3001/api/send", send.formValues).then((res) => {
      console.log(res);
    });
    console.log(send.formValues);
    send.setFormValues(send.defaultValues);
  };
  const send = {
    handleDelete,
    problems,
    setproblems,
    check,
    setcheck,
    update,
    setupdate,
    formValues,
    setFormValues,
    defaultValues,
    handleSubmit
  };
  return (
    <Allpar.Provider value={send}>
      <>
        <Header
          problems={problems}
          setproblems={setproblems}
          value={value}
          setValue={setValue}
        />
        <div>
          {value === 0 && (
            <Homepage problems={problems} setproblems={setproblems} />
          )}
          {value === 1 && (
            <Important problems={problems} setproblems={setproblems} />
          )}
          {value === 2 && (
            <Solved problems={problems} setproblems={setproblems} />
          )}
          {value === 3 && (
            <AddQuestion
              handleSubmit={send.handleSubmit}
              formValues={send.formValues}
              setFormValues={send.setFormValues}
            />
          )}
        </div>
      </>
    </Allpar.Provider>
  );
};

export default App;
