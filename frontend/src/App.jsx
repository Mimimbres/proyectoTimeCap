import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { NavBar } from "./components/NavBar";
import SignUp from "./pages/Signup";
import Login from "./pages/Login";
import RequireAuth from "./components/ProtectedRoute";
import { GetAllCapsules } from "./pages/GetAllCapsules";
import CreateCapsules from "./pages/CreateCapsules";

function App() {
  return (
    <Routes>
      <Route element={<NavBar />}>
        <Route element={<RequireAuth />}>
          <Route path="/capsules" element={<GetAllCapsules />} />
          <Route path="/create-capsules" element={<CreateCapsules />} />
        </Route>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;