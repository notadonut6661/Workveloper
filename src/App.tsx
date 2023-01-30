import React from 'react';
import './App.css';
import Home from "./Pages/Home";
import {Route, Routes} from "react-router-dom";
import AuthComponent from "./Feature/Auth/Components";
import Announcements from "./Pages/Announcements";

function App() {
  return (
      <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/login'} element={<AuthComponent/>}/>
          <Route path={'/Announcements'} element={<Announcements/>}/>
      </Routes>
  );
}

export default App;
