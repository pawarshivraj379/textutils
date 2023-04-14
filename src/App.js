import './App.css';
 import About from './components/About';
import Navbar from './components/Navbar';
 import TextForm from './components/TextForm';
 import React,{useState} from 'react';
import Alerts from './components/Alerts';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [alert,setAlert] = useState(null);
  const showAlert = (type,message)=>{
    setAlert({
      type:type,
      msg:message})

      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }

  const [mode, setMode] = useState("light");
   const toggleMode = ()=>{
      if(mode === 'light'){
        setMode('dark')
        document.body.style.backgroundColor = '#2b8285';
        showAlert('success','Dark Mode Enabled');
      }else{
        setMode('light')
        document.body.style.backgroundColor = 'white';
        showAlert('success','Light Mode Enabled');
      }
   }
  return (
    <>
  <Router>
    <Navbar title="TextUtils" about="AboutUS" alert= {alert} modeStatus = {mode} toggleMode={toggleMode}></Navbar>
    <Alerts alert= {alert}/>
    <div className='container my-3'>
    <Routes>
    <Route exact path="/" element={<TextForm heading = "Enter the text" modeStatus = {mode} alert= {alert} showAlert={showAlert}/>}>
    </Route>
    <Route path="/about" element={<About mode = {mode}/>}>
    </Route>
  </Routes>
     </div>
     </Router>
    </>
  );
}

export default App;
