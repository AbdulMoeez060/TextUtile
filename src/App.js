import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import React, { useState } from 'react'
import Alert from './components/Alert';


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
      <Navbar title="TextUtils" aboutThis="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForms showAlert={showAlert} textDetails="Enter Text to Analyze" mode={mode}/>
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;