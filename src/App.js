import { Form } from "react-hook-form"
import React from "react";
import { Route, Routes } from "react-router-dom";
import Forms from "./components/Forms"
function App() {
  return (


    <div>
      <Routes>
        <Route path='/' element={<Forms />}></Route>
      </Routes>
    </div>
  )
}

export default App
