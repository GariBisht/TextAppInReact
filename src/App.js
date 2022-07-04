
import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import About from './components/About';
import React, { useState } from 'react'; //hooks
import Alert from './components/Alert';
//let name = "Garima Bisht";
import {
  BrowserRouter as Router,
  
  Routes,
  Route,
  
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');// whether dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {

    setAlert({
      msg: message,
      type: type
    })
  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#38739d';
      //show alert
      showAlert("Dark Mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
    }
  }
  return (
    <>

      {/*<Navbar title = "TextUtils" mode={mode} Link ="About Text"/>  */}
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        {/* <div className="container my-3"> */}
          <Routes>
            <Route exact path="/" element={<TextForms showAlert={showAlert} heading="Enter Any Text you want to check" mode={mode} /> } />
              
           
            <Route path="/about" element={<About />} />
             
          </Routes>
        {/* </div> */}
      </Router>
      {/*<TextForms /> */}
      {/*<Navbar/> */}

      {/*<About /> */}

    </>



    // <div className="blank"><h1>This is tyrying Me!</h1></div>
    /* <>  
     <nav>
       <li>Home</li>
       <li>About</li>
       <li>Contact</li>
   </nav>
   <img src ="" alt="" />
   <div className ="container">
     <h2>I am Trying "{name}"</h2>
     <p><h3>
     Give sometimes everything will be alright!
     </h3></p>
   </div>
     </>
   */


    /*
     <>
        <h1>This is trying me</h1>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              hey I am trying
            </a>
          </header>
        </div>
        </> */



  );
}

export default App;

