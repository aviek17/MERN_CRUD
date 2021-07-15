import React from 'react'
import Navbar from './Components/Navbar'
import {Route} from "react-router-dom"
import Delete from "./Components/Delete"
import Insert from "./Components/Insert"
import Update from "./Components/Update"
import Home from "./Components/Home"
import ReadAll from "./Components/ReadAll"





const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/insert">
        <Insert/>
      </Route>
      <Route path="/update/:id/:fname">
        <Update/>
      </Route>
      <Route path="/delete/:id">
        <Delete/>
      </Route>
      <Route path="/readall">
        <ReadAll/>
      </Route>
    </div>
  )
}

export default App
