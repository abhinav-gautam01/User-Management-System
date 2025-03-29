
import './App.css'
import {
  BrowserRouter,
  Route,
  Routes,Navigate
} from "react-router-dom";
import { Signin } from '../pages/Signin';
import { Dashboard } from '../pages/Dashboard';
import { Profile } from '../pages/Profile';

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigate to="/signin" replace />} />
        <Route path="/signin" element={<Signin/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
