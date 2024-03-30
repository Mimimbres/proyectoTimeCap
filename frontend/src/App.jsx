import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query';
import { HomePage } from "./pages/HomePage";
import { NavBar } from "./components/NavBar";
import SignUp from "./pages/Signup";
import Login from "./pages/Login";
import RequireAuth from "./components/ProtectedRoute";
import { GetAllCapsules } from "./pages/GetAllCapsules";
import { GetCapsule } from "./pages/GetCapsule";
import CreateCapsules from "./pages/CreateCapsules";
import UpdateCapsule from "./pages/UpdateCapsules";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route element={<RequireAuth />}>
          <Route path="/capsules" element={<GetAllCapsules />} />
          <Route path="/create-capsules" element={<CreateCapsules />} />
          <Route path="/capsule/:id" element={<GetCapsule />} />
          <Route path="/update/:id" element={<UpdateCapsule />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;

