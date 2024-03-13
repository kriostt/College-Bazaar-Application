import { Routes, Route } from "react-router-dom"; 
import EditProfile from "./components/ProfileManagement/EditProfile";
import ChangePassword from "./components/ProfileManagement/ChangePassword";

function App() {
  return (
    <Routes>
      <Route path="/" element={<EditProfile />} />
      <Route path="/change-password" element={<ChangePassword />} />
    </Routes>
  );
}

export default App;
