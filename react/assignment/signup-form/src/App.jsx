import React, { useState } from "react";
import './App.css'
import ControlledForm from "./ContolledForm";
import UncontrolledForm from "./UncontrolledForm";
import UncontrolledExample from "./UncontrolledExample";
import Iterable from "./Iterable";
function App() {
  return(
    <>
      {/* <UncontrolledExample/> */}
      {/* <ControlledForm/> */}
      {/* <UncontrolledForm data = {['1', '2', '3']} /> */}
      <Iterable/>
    </>
  )
}

export default App;
