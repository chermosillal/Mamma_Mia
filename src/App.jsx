import { Route, Routes } from 'react-router-dom'
import './App.css'
import Cart from './pages/Cart'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Pizza from './pages/Pizza'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import Profile from './pages/Profile'
import Logout from './pages/Logout'

function App() {

  return (
    <>
      <Navbar/>
      {/* <Home/> */}
      {/* <Register/> */}
      {/* <Login/> */}
      {/* <Cart/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/pizza/p001" element={<Pizza />} /> */}
        <Route path="/pizza/:id" element={<Pizza />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      {/* <Pizza/> */}
      <Footer/>
    </>
  )
}

export default App
