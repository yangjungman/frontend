import Navbar from "./layout/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import Home from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddUser from "./users/AddUser";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* 홈페이지와 유저추가 페이지 두개를 만듬 위에는 항상 네비게이션바 */}
          <Route path="/" element={<Home />} />
          <Route path="/adduser" element={<AddUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
