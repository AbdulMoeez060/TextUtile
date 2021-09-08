import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode]=useState("light");

  const [alert,setAlert]=useState(null);

  const showAlert= (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },3000);
  }

  const toggleMode=()=>{
    if (mode==="light") {
      setMode("dark");
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode Enabled","success")
    }
    else{
      setMode("light");
      document.body.style.backgroundColor='white';
      showAlert("Dark Mode Disabled","success")

    }
  };

  return (
    <>
      <Router>

      <Navbar title="TextUtils" aboutThis="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
          <TextForms showAlert={showAlert} textDetails="TextUtils - Word Counter | Character counter" mode={mode}/>
          </Route>
        </Switch>
      </div>
      {/* <About/> */}
      </Router>

    </>
  );
}

export default App;