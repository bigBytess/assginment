import Login from "./views/Login";
import SignUp from "./views/SignUp";
import Dashboard from "./views/Dashboard";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Outlet,
} from "react-router-dom";


const Layout = () => {
  return (
    <div className="min-h-dvh flex justify-center items-center layout">
      <Outlet />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </Router>
  );
}
