import Login from "./views/loginPage";
import Home from "./views/homePage";
import { useState } from "react";
import CreatePage from "./views/createPage";
import { BrowserRouter, Routes, Route } from "react-router";
import BaseLayout from "./views/BaseLayout";
import EditPage from "./views/editPage";
import ImagePage from "./views/imagePage";
import AddUserPage from "./views/addUserPage";

function App() {
  const [page, setPage] = useState('login')

  return (
    <>

      <div className="p-5">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<BaseLayout />} >
              <Route path="/home" element={<Home />} index />
              <Route path="/add" element={<CreatePage />} />
              <Route path="/update/:id" element={<EditPage />} />
              <Route path="/addUser" element ={<AddUserPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
      
    </>
  );
}

export default App
