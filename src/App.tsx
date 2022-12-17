import React from 'react';
import './App.css';
import Home from "./Pages/Home";
import {Route, Routes} from "react-router-dom";
import AuthComponent from "./Feature/Auth/Components";

function App() {
  return (
      <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/login'} element={<AuthComponent/>}/>
      </Routes>
  );
}

export default App;
