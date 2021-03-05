import React,{useEffect} from 'react'
import TextField from '@material-ui/core/TextField';

import './App.css';
import axios from 'axios'
import { Button } from '@material-ui/core';
import Form from './From'
import Plan from './Plan'
import NewPlan from './NewPlan'
import Header from './Header'


function App() {
  const [search, setSearch] = React.useState('')
  const handleClick = (e) =>{
    const body = {
      search : e.target.value
    }
    axios.post('http://127.0.0.1:5000/', body)
    .then((res) =>{
      console.log("Success!" , res)
    })
    .catch(error =>{
      console.log("error")
    })

  }
  return (
    <div >
      <Form/>
      {/* <Plan/> */}
      
      {/* <Header/> */}
      {/* <NewPlan/> */}

    </div>
  );
}

export default App;
