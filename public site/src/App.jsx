import { useState } from "react";
import Home from "./views/home";
import Detail from "./views/detail";
import { BrowserRouter, Routes, Route } from "react-router";
import BaseLayout from "./views/BaseLayout";

function App() {

  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route element={<BaseLayout />} >
            <Route path="/" element={<Home />} index />
            <Route path="/detail/:id" element={<Detail />} />
          </Route>  
        </Routes>
      </BrowserRouter>,
    </>
  )
}

export default App
