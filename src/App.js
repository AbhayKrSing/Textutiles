
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react'
// import ColorMode from './components/ColorMode';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './components/About';


function App() {
  const [Mode, SetMode] = useState('light');
  const [alert, setalert] = useState(null)
  // const [Color, setColor] = useState('')
  // let ThemeChanger = (event) => {
  //   if (event.target.getAttribute('class') === 'btn btn-light mx-2') {
  //     document.body.style.backgroundColor = 'white'
  //     setColor('white')
  //     ShowAlert('Light Mode is Successfully enabled', 'success')
  //   }
  //   else if (event.target.getAttribute('class') === 'btn btn-success mx-2') {
  //     document.body.style.backgroundColor = '#698000'
  //     setColor('green')
  //     ShowAlert('Green Mode is Successfully enabled', 'success')
  //   }
  //   else if (event.target.getAttribute('class') === 'btn btn-warning mx-2') {
  //     document.body.style.backgroundColor = '#ff7a00cc'
  //     setColor('yellow')
  //     ShowAlert('yellow Mode is Successfully enabled', 'success')
  //   }
  //   else if (event.target.getAttribute('class') === 'btn btn-info mx-2') {
  //     document.body.style.backgroundColor = 'lightblue'
  //     setColor('lightblue')
  //     ShowAlert('Blue Mode is Successfully enabled', 'success')
  //   }

  // }
  // document.title = `${Color===''?'TextUtiles-app':`TextUtiles ${Color}-mode`}`
  let ShowAlert = (message, type) => {
    setalert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1000)
  }
  let toggleMode = () => {
    if (Mode === 'light') {
      SetMode('dark')
      document.body.style.backgroundColor = '#29296d'
      ShowAlert('Dark Mode is Successfully enabled', 'success')
    }
    else {
      SetMode('light')
      document.body.style.backgroundColor = 'white'
      ShowAlert('Light Mode is Successfully enabled', 'success')
    }
  }

  return (
    <>
      <Router>
      <Navbar titles="TextUtilies" mode={Mode} toggleMode={toggleMode} About='About' />
      <Alert alert={alert} />
      {/* <TextForm heading="Enter the text" ShowAlert={ShowAlert} mode={Mode} /> */}
      {/* color={Color} enable it when state variable color become active}
      <ColorMode ThemeChanger={ThemeChanger} /> */}
      {/* <About /> */}
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Routes >
        <Route path="about" element={<About mode={Mode} />} />
        <Route path="/" element={<TextForm heading="Word counter,Character counter,Remove extra spacer,Uppercase & Lowercase converter" ShowAlert={ShowAlert} mode={Mode} />} />
      </Routes>
    </Router>
    </>
  );  //semi colon(;) niche isliye lga hi kyuki react automatically ise agar kahi aur assign kar dega to dikkat aajayegi
}
export default App;
