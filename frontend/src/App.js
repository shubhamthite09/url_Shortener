import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import UserDashbord from './pages/UserDashbord';
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/reg" element={<SignupPage />} />
      <Route path="/log" element={<LoginPage />} />
      <Route path="/dash" element={<UserDashbord />} />
    </Routes>
    </div>
  );
}

export default App;
