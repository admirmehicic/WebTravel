import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Add from "./pages/Add";
import Putovanja from "./pages/Putovanja";
import Update from "./pages/Update";
import "./style.css";
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminSuccess from "./pages/AdminSuccess";
import User from "./pages/User";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Putovanja/>} />
        <Route path ="/add" element={<Add/>} />
        <Route path ="/adminSuccess" element={<AdminSuccess/>} />
        <Route path ="/admin" element={<AdminLoginPage/>} />
        <Route path ="/user" element={<User/>} />
        <Route path ="/update/:id" element={<Update/>} />
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
