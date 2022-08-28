import React from 'react'
import Homepage from '../Homepage'
import axios from 'axios'
import { useContext } from 'react'
import { Allpar } from '../../App'
import { useEffect } from 'react'
const Solved = () => {
    const send=useContext(Allpar)
    useEffect(() => {
      axios
      .get("http://localhost:3001/api/solved")
      .then((res) => send.setproblems(res.data.problems))
      .catch((err) => console.log(err));
    }, [])
    
    return (
      <>
      <Homepage/>
      </>
    )
  }

export default Solved