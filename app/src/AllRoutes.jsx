import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Contacts from "./components/contacts";
import Forms from "./components/Forms";
function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/contacts" element={<Contacts />}></Route>
        
        <Route path="/forms" element={<Forms />}></Route>
      </Routes>
    </>
  );
}

export default AllRoutes;