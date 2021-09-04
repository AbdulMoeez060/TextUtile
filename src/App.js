import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import React, { useState } from 'react'


function App() {
  const [mode, setMode]=useState("light");

  const toggleMode=()=>{
    if (mode==="light") {
      setMode("dark");
      document.body.style.backgroundColor='#042743';
    }
    else{
      setMode("light");
      document.body.style.backgroundColor='white';
    }
  };

  return (
    <>
      <Navbar title="TextUtils" aboutThis="About" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
        <TextForms textDetails="Enter Text to Analyze" mode={mode}/>
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;