import './App.css'
import Login from './pages/Login'
import { Routes, Route } from "react-router-dom";
import RequestReset from './pages/RequestReset';
import ResetPassword from './pages/ResetPassword';
function App() {

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/forgot-password" element={<RequestReset />} />
      <Route path="/reset-password/:email" element={<ResetPassword />} />
    </Routes>
  )
}

export default App
